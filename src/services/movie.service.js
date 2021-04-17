import axiosHelper from './axios-base.service';
import ConfigBase from '../config/global';

class MovieService {
    constructor(){
    }

    getMovieListSearch = (maNhom) => {
        const query = `QuanLyPhim/LayDanhSachPhim?maNhom=${maNhom}`;
        return axiosHelper.get(query);
    }

    getInfoMovieThreaterList = (maPhim) => {
        const query = `QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`;
        return axiosHelper.get(query);
    }
}

const movieService = new MovieService();
export default movieService;