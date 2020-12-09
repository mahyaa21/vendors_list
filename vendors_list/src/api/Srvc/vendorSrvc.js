import axios from 'axios';
export const getVendorsListApi = (data: any) => {

    return new Promise((resolve, reject) => {
        axios.get(`https://snappfood.ir/mobile/v3/restaurant/vendors-list`,
        {
            params: data.params
          }
        )
            .then((response) => response)
            .then(resolve)
            .then(reject)
            .catch((response) => Promise.resolve(response.data))
    })

}