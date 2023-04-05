import Image from 'next/image';
const ImgComponent = ()=>{
    return (
    <Image
        src="/images/annoybot.jpeg"
        height={144}
        width={144}
        alt="annoybot"
    />
    ) 
};

export default function FirstPost() {
    return (
        <>
            <h1>First Post</h1>
            <ImgComponent/>
        </>
    ) 

}

