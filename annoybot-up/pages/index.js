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
            width={80}
            height={80}
            alt="annoybot"
        />
        
    )
}

const Box = ({name ='',style = '', icon = '', desc = ''})=>{
    // props: style: styles.box(n), icon: fa... , desc: (string)
    
    return(
        <div className={`${styles.box} ${style}`}>
            <div className={styles.boxContent}>
                <div className={styles.uptimeIcon}>
                    <p className={styles.uptimeLabel} >
                        <FontAwesomeIcon icon={icon}/> {name}
                                        
                    </p>
                                    
                </div>
                <p className={`${styles.boxDescription} ${styles.hidden}`}>{desc}</p>
            </div>
        </div>

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
                    <Box name ='UPTIME' style={styles.box1} icon={faChartSimple} desc='View annoybot&apos;s uptime statistics here!'/>
                    <Box name ='ABOUT' style={styles.box2} icon={faBookOpen} desc='Learn more about annoybot: Its features, history, and development!'/>
                    <Box name ='LEGAL DOCS' style={styles.box3} icon={faQuestionCircle} desc='Legal documentation that you agree to when you use annoybot. Contains the TOS, privacy policy and licence.'/>
                    
                </div>
                
                
                <div className={styles.right}>
                    <div className={styles.logo}>
                        <Logo/>
                        
                        <p className={styles.logoText}>annoybot</p>
                    </div>
                    <div className={styles.blurb}>
                        <p className={styles.blurbText}><span className={styles.buttonLink}><a href="https://discord.com/api/oauth2/authorize?client_id=844757192313536522&permissions=1507264163186&scope=applications.commands%20bot">annoybot</a></span>: A bot built with <span className={styles.buttonLink}><a href="hhttps://pypi.org/project/discord.py/">Discord.py</a></span> that annoys your friends. Hands down the best way to mess with them online. Hosted by <span className={styles.buttonLink}><a href="https://replit.com">Replit</a></span>.</p>
                    </div>
                    
                </div>
                
            </div>
            
        </main>
        </>
    )
}