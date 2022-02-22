

export const getKeywordAsync = 
  async (회사명,x,y) => {
    console.log(x,y)
    const response = await fetch(
      `https://dapi.kakao.com/v2/local/search/keyword.json?y=${y}&x=${x}&radius=20000&query=` +
        encodeURIComponent(회사명),
      {
        method: "GET",
        headers: {
          Authorization: "KakaoAK 19541ea01f4c165aadef26ddd5474d71",
        },
      }
    );
    if (response.ok) {
      const keyword = await response.json();
      console.log(keyword, "keyword");
      const { x, y } = keyword.documents[0];
      const newCompanyKeywords = {
        x: x,
        y: y,
      };
      return { newCompanyKeywords };
    }
  }



