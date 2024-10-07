import Head from "next/head"
const Index = () => {
    return <div>
        <Head>
            <title>ssr</title>
        </Head>
        <h1>首页</h1>
        <img src={"/test.png"} />
    </div>
}
export default Index