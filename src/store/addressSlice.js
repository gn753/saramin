import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// export const getAddressAsync = createAsyncThunk(
//   "address/getAddressAsync",
//   async (지역위치) => {
//     const response = await fetch(
//       "https://dapi.kakao.com/v2/local/search/address.json?query=" +
//         encodeURIComponent(지역위치),
//       {
//         method: "GET",
//         headers: {
//           Authorization: "KakaoAK 19541ea01f4c165aadef26ddd5474d71",
//         },
//       }
//     );
//     if (response.ok) {
//       const localDatas = await response.json();

//       const { x, y, address_name } = localDatas.documents[0];
//       // console.log(localDatas, "지역데이터");
//       const newAddress = {
//         x: x,
//         y: y,
//         address_name: address_name,
//       };
//       return { newAddress };
//     }
//   }
// );


export const getAddressAsync = 
  async (지역위치) => {
    const response = await fetch(
      "https://dapi.kakao.com/v2/local/search/address.json?query=" +
        encodeURIComponent(지역위치),
      {
        method: "GET",
        headers: {
          Authorization: "KakaoAK 19541ea01f4c165aadef26ddd5474d71",
        },
      }
    );
    if (response.ok) {
      const localDatas = await response.json();

      const { x, y, address_name } = localDatas.documents[0];
      // console.log(localDatas, "지역데이터");
      const newAddress = {
        x: x,
        y: y,
        address_name: address_name,
      };
      return { newAddress };
    }
  }




// const addressSlice = createSlice({
//   name: "address",
//   initialState: [],
//   reducers: {},
//   extraReducers: {
//     [getAddressAsync.pending]: (state, action) => {
//       console.log("fetching 주소 data 받아오는중...");
//     },
//     [getAddressAsync.fulfilled]: (state, action) => {
//       console.log("fetching 주소 data 성공..");
//       state.push(action.payload.newAddress);
//     },
//   },
// });

