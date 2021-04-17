import axiosHelper from '../services/axios-base.service';

class TheaterService {
    constructor() {}

    getGroupTheater = () => {
        const query = `QuanLyRap/LayThongTinHeThongRap`;
        return axiosHelper.get(query);
    }

    getMovieListByGroupTheater = (maNhom, maHeThongRap) => {
        const query = `QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=${maNhom}`;
        return axiosHelper.get(query);
    }

    getTheaterList = (maHeThongRap) => {
        const query = `QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`;
        return axiosHelper.get(query);
    }
}

const theaterService = new TheaterService();
export default theaterService;