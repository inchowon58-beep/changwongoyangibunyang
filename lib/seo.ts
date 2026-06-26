export const siteUrl = "https://changwongoyangibunyang.vercel.app";

export const targetKeywords = ['창원고양이분양', '창원 고양이', '창원 냥이 분양', '창원 반려묘', '고양이분양 창원'] as const;

export const siteTitle = "창원고양이분양, 건강하고 사랑스러운 반려묘 만남의 시작!";

export const siteDescription =
  "창원 지역에서 건강하고 사랑스러운 고양이를 찾고 계신가요? 다양한 묘종, 철저한 건강 관리, 믿을 수 있는 창원고양이분양 전문점에서 새로운 가족을 만나보세요.";

export function getStructuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "창원고양이분양",
        description: siteDescription,
        inLanguage: "ko-KR",
        telephone: "0505-464-1004",
        knowsAbout: [...targetKeywords],
      },
    ],
  };
}
