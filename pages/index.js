import styles from '../styles/Home.module.css'
import {fetcher} from "./api/strapi";
import UserCard from "../components/user-card";
import SectionCard from "../components/section-card";
import {useState, useEffect} from "react";

export default function Home({sectors}) {
    const [currentDate, setCurrentDate] = useState("");

    useEffect(() => {
        const date = new Date();

        let day = date.getDay();
        let dayNum = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        switch (day) {
            case 1 :
                day = "Lundi"
                break;
            case 2 :
                day = "Mardi"
                break;
            case 3 :
                day = "Mercredi"
                break;
            case 4 :
                day = "Jeudi"
                break;
            case 5 :
                day = "Vendredi"
                break;
            case 6 :
                day = "Samedi"
                break;
            default :
                day = "Dimanche"
        }
        switch (month) {
            case 1 :
                month = "Janvier"
                break;
            case 2 :
                month = "Février"
                break;
            case 3 :
                month = "Mars"
                break;
            case 4 :
                month = "Avril"
                break;
            case 5 :
                month = "Mai"
                break;
            case 6 :
                day = "Juin"
                break;
            case 7 :
                month = "Juillet"
                break;
            case 8 :
                month = "Août"
                break;
            case 9:
                month = "Septembre"
                break;
            case 10 :
                month = "Octobre"
                break;
            case 11 :
                month = "Novembre"
                break;
            default :
                month = "Décembre"
        }

        setCurrentDate(`${day} ${dayNum} ${month} ${year}`);
    })

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1 style={{'textAlign': 'center', 'marginBottom': '6rem'}}>{currentDate}</h1>
                {
                    sectors && sectors.data.map((cat) => (
                        cat.attributes.group.map((item, index) => (

                            <section key={index}>
                                <SectionCard label={item.zone.data.attributes.label}
                                             nbTotal={item.team_members.data.length}/>
                                {
                                    item.team_members.data.map((item, index) => (
                                        <UserCard key={index} fullname={item.attributes.fullname}
                                                  position={item.attributes.position}/>
                                    ))
                                }
                            </section>

                        ))
                    ))
                }
            </main>
        </div>
    )
}

export async function getStaticProps() {

    const url = 'https://hsa-collab-backend.herokuapp.com/api/team-compositions?populate[group][populate]=*'
    console.log(url)
    const sectorsRes = await fetcher(url);
    console.log(sectorsRes)
    return {
        props: {
            sectors: sectorsRes
        }
    }
}