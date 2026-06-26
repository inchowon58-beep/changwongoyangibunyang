import type { Metadata } from "next";
import {
  getStructuredData,
  siteUrl,
} from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://changwoncat.dmcmusic.co.kr"),
  title: "창원고양이분양, 건강하고 사랑스러운 반려묘 만남의 시작!",
  description: "창원 지역에서 건강하고 사랑스러운 고양이를 찾고 계신가요? 다양한 묘종, 철저한 건강 관리, 믿을 수 있는 창원고양이분양 전문점에서 새로운 가족을 만나보세요.",
  keywords: ["https://changwoncat.dmcmusic.co.kr/"],
  authors: [{ name: "https://changwoncat.dmcmusic.co.kr/" }],
  creator: "https://changwoncat.dmcmusic.co.kr/",
  publisher: "https://changwoncat.dmcmusic.co.kr/",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://changwoncat.dmcmusic.co.kr",
    siteName: "https://changwoncat.dmcmusic.co.kr/",
    title: "창원고양이분양, 건강하고 사랑스러운 반려묘 만남의 시작!",
    description: "창원 지역에서 건강하고 사랑스러운 고양이를 찾고 계신가요? 다양한 묘종, 철저한 건강 관리, 믿을 수 있는 창원고양이분양 전문점에서 새로운 가족을 만나보세요.",
    images: [{ url: "/images/landing-01.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "창원고양이분양, 건강하고 사랑스러운 반려묘 만남의 시작!",
    description: "창원 지역에서 건강하고 사랑스러운 고양이를 찾고 계신가요? 다양한 묘종, 철저한 건강 관리, 믿을 수 있는 창원고양이분양 전문점에서 새로운 가족을 만나보세요.",
    images: ["/images/landing-01.jpg"],
  },
  alternates: {
    canonical: "https://changwoncat.dmcmusic.co.kr",
  },
  category: "https://changwoncat.dmcmusic.co.kr/",
  verification: {
    other: {
      "naver-site-verification": "5568181adff0a16c61caec60ce3165f5e69406f0",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = getStructuredData();

  return (
    <html lang="ko">
      <head>
        <meta name="naver-site-verification" content="5568181adff0a16c61caec60ce3165f5e69406f0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className="font-sans pb-safe-floating lg:pb-0">{children}</body>
    </html>
  );
}
