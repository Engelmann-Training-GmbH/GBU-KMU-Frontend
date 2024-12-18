import {NextResponse} from "next/server";
import {headers} from "next/headers";
import moment from "moment";

export async function POST(request: Request, {params}: { params: Promise<{ key: string }> }) {
    const {key} = await params
    const header = await headers()
    let requestBody
    try {
        requestBody = await request.json()
        // eslint-disable-next-line @typescript-eslint/no-explicit-any,@typescript-eslint/no-unused-vars
    } catch (error: any) {
        return new NextResponse('Your body is malformed!', {status: 500});
    }

    // Check for key
    if (!key) {
        return new NextResponse('A licence key is required!', {status: 400});
    }
    // Check if licence Exists
    const licenceToCheck = licences.find(licence => licence.licence == key)
    if (!licenceToCheck) {
        return new NextResponse('Couldn\'t find the provided licence key!', {status: 406});
    }
    // Check Version
    if (!requestBody.version) {
        return new NextResponse('Your GBU-KMU-Version must be provided!', {status: 400});
    }

    if (requestBody.version.substring(0, 1) != licenceToCheck.version) {
        console.log('Licence check failed for licence: ' + key + "(Host: ?): Wrong version!");
        return new NextResponse('Your license-version is not suitable for the version of your GBU-KMU!', {status: 409});
    }
    // Check ServerRef
    const host = header.get('x-forwarded-for')
    if (!host) {
        console.log('Licence check failed for licence: ' + key + "(Host: " + host + "): Missing host!");
        return new NextResponse('Your host couldn\'t be detected!', {status: 400});
    }

    if (host != licenceToCheck.serverRef) {
        console.log('Licence check failed for licence: ' + key + "(Host: " + host + "): Wrong host!");
        return new NextResponse('Your licence dosen\'t match your host!', {status: 403});
    }

    // Check Company max
    if (!requestBody.companies) {
        return new NextResponse('The current number of companies must be provided!', {status: 400});
    }

    if (requestBody.companies > licenceToCheck.companyLimit) {
        console.log('Licence check failed for licence: ' + key + "(Host: " + host + "  Companies: " + requestBody.companies +
            "): Company Limit reached!"
        );
        return NextResponse.json({
                expires: licenceToCheck.expirationDate,
                companyLimit: licenceToCheck.companyLimit,
                version: licenceToCheck.version,
            },
            {
                status: 418,
                statusText: 'You have reached your company limit!',
                headers: {
                    'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
                    'Pragma': 'no-cache',
                    'Expires': '0'
                }
            });
    }
    const now = moment();
    if (now.isAfter(moment(licenceToCheck.expirationDate))) {
        console.log('Licence check failed for licence: ' + key + "(Host: " + host + "  Companies: " + requestBody.companies +
            "): Expired!"
        );
        return NextResponse.json({
                expires: licenceToCheck.expirationDate,
                companyLimit: licenceToCheck.companyLimit,
                version: licenceToCheck.version,
            },
            {
                status: 402,
                statusText: 'Your licence expired!',
                headers: {
                    'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
                    'Pragma': 'no-cache',
                    'Expires': '0'
                }
            });
    }
    console.log('Licence successfully checked for licence: ' + key + "(Host: " + host + "  Companies: " + requestBody.companies + ")");
    return NextResponse.json({
            expires: licenceToCheck.expirationDate,
            companyLimit: licenceToCheck.companyLimit,
            version: licenceToCheck.version,
        },
        {
            status: 200,
            headers: {
                'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
                'Pragma': 'no-cache',
                'Expires': '0'
            }
        });
}

const licences = [
    {
        licence: "4295c6a3-2c1c-464e-a397-c35bbd71fcf9",
        customer: "Engelmann.Training GmbH",
        contact: "service@engelmann.training",
        expirationDate: moment('2100-12-24'),
        version: "1",
        serverRef: "188.245.124.29",
        companyLimit: 20
    },
    {
        licence: "ad040079-a0bf-4140-b910-5af024d73160",
        customer: "Engelmann.Training GmbH (DEV)",
        contact: "entwicklung@engelmann.training",
        expirationDate: moment('2100-12-24'),
        version: "1",
        serverRef: "84.142.52.106",
        companyLimit: 50
    },
    {
        licence: "f47c0d9e-df9e-47e6-b3a4-720262e483a6",
        customer: "MAICON GmbH",
        contact: "reiner.maier@maicon-gmbh.de",
        expirationDate: moment('2025-12-24'),
        version: "1",
        serverRef: "0.0.0.0",
        companyLimit: 20
    },
]
