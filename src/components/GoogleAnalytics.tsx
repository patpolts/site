import Script from "next/script";

export function GoogleAnalytics({ ga_id }: { ga_id: string }) {
    return (<>
        {/* <!-- Google tag (gtag.js) --> */}
        <Script  src={`https://www.googletagmanager.com/gtag/js?id=${ga_id}`} async />
        <Script id="google-analytics" dangerouslySetInnerHTML={{
                __html: `window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                    gtag('config', '${ga_id}');
                    `,
            }} async />
    </>)
}