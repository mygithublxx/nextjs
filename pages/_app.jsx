import Link from "next/link";
import "./global.css"
export default ({ Component, pageProps }) => {
  return (
    <div>
      <h1>模版</h1>
      <ul>
        <li>
          <Link href="/">
            首页
          </Link>
        </li>
      </ul>

      <Component {...pageProps} />
    </div>
  );
};
