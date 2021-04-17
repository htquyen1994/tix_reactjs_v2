import axiosHelper from './axios-base.service';

class IntroduceMovieService {
    constructor() {

    }

    getMovieListSapChieu = (maNhom) => {
        const query = `QuanLyPhim/LayDanhSachPhim?maNhom=${maNhom}`;
        return axiosHelper.get(query);
    }

    getMovieListDangChieu = (maNhom) => {
        const query = `QuanLyPhim/LayDanhSachPhim?maNhom=${maNhom}`;
        return axiosHelper.get(query);
    }
}

const introduceMovieService = new IntroduceMovieService();
export default introduceMovieService;