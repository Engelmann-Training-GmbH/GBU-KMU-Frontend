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
        return new NextResponse('Couldn\'t find the provided licence key!', {status: 404});
    }
    // Check Version
    if (!requestBody.version) {
        return new NextResponse('Your GBU-KMU-Version must be provided!', {status: 400});
    }

    if (requestBody.version.substring(0, 1) != licenceToCheck.version) {
        return new NextResponse('Your license-version is not suitable for the version of your GBU-KMU!', {status: 409});
    }
    // Check ServerRef
    const host = header.get('x-forwarded-for')
    if (!host) {
        console.log('Licence check failed for host: ' + host);
        return new NextResponse('Your host couldn\'t be detected!', {status: 404});
    }

    if (host != licenceToCheck.serverRef) {
        console.log('Licence check failed for licence [' + licenceToCheck.licence + '] for host: ' + host);
        return new NextResponse('Your licence dosen\'t match your host!', {status: 403});
    }

    // Check Company max
    if (!requestBody.companies) {
        return new NextResponse('The current number of companies must be provided!', {status: 400});
    }

    if (requestBody.companies > licenceToCheck.companyLimit) {
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
        licence: "9022fcf6-a056-4df4-8284-bac65ef9ad2a",
        customer: "Maicon GmbH",
        contact: "Maicon GmbH",
        expirationDate: moment('2025-12-24'),
        version: "1",
        serverRef: "91.224.227.248",
        companyLimit: 20
    },
]
