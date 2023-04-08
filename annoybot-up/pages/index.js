import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Index.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartSimple, faQuestionCircle, faBookOpen } from "@fortawesome/free-solid-svg-icons";



const Logo = ()=>{
    return(
        <Image
            className = {styles.logoImage}
            src="/images/annoybot.jpeg"
            height={100}
            width={100}
            alt="annoybot"
        />
    )
}


export default function Main(){

    return(
        <>
        <Head>
            <title>Main</title>
        </Head>
        <main>
            <div className={styles.pageContainer}>
                <div className={styles.boxContainer}>
                    <div className={[styles.box, styles.box1].join(' ')}>
                        <div className={styles.boxContent}>
                            <div className={styles.uptimeIcon}>
                                <p className={styles.uptimeLabel} >
                                    <FontAwesomeIcon icon={faChartSimple}/> UPTIME
                                    
                                </p>
                                
                            </div>
                            <p className={[styles.boxDescription, styles.hidden].join(' ')}>View the bot&apos;s uptime statistics here!</p>
                        </div>

                        
                    </div>
                    <div className={[styles.box, styles.box2].join(' ')}>
                        <div className={styles.boxContent}>
                            <div className={styles.uptimeIcon}>
                                <p className={styles.uptimeLabel} >
                                        <FontAwesomeIcon icon={faBookOpen}/> ABOUT
                                        
                                </p>
                                    
                            </div>
                            <p className={[styles.boxDescription, styles.hidden].join(' ')}>Learn more about annoybot: Its features, history, and development!</p>
                        </div>
                    </div>
                    <div className={[styles.box, styles.box3].join(' ')}>
                        <div className={styles.boxContent}>
                            <div className={styles.uptimeIcon}>
                                <p className={styles.uptimeLabel} >
                                    <FontAwesomeIcon icon={faQuestionCircle}/> FAQS
                                            
                                </p>
                                        
                            </div>
                            <p className={[styles.boxDescription, styles.hidden].join(' ')}>Answering frequently asked questions regarding annoybot and its operation</p>
                        </div>
                    </div>
                </div>
                
                
                <div className={styles.logo}>
                    
                    <Logo/>
                    
                    <p className={styles.logoText}>AnnoyBot</p>
                </div>
            </div>
            
        </main>
        </>
    )
}