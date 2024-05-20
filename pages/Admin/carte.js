import LeftBox from "@/components/LeftBox.jsx";
import RightBox from "@/components/RightBox.jsx";
import HeaderAdmin from "../../components/HeaderAdmin.jsx";
import CarteComponents from "@/components/Map";
export default function Carte() {
    return (
        <>
            <HeaderAdmin />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <LeftBox>
                    <CarteComponents />
                </LeftBox>
                <RightBox>
                    <img src="/assets/img/closLogo.jpg" alt="" style={{width: "400px", height:"400px", margin: "5%", marginTop:"80px"}}/>
                </RightBox>
            </div>
        </>
    )
}