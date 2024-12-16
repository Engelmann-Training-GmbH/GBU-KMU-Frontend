import Header from "@/app/_components/Header";
import FeaturesPrimary from "@/app/_components/FeaturesPrimary";
import FeaturesSecondary from "@/app/_components/FeaturesSecondary";
import {Faqs} from "@/app/_components/FAQs";

export default function Home() {

    return (
        <>
            <Header/>
            <FeaturesPrimary/>
            <FeaturesSecondary/>
            <Faqs/>
        </>
    );
}
