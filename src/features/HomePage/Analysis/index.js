import React from 'react';
import './style.scss';
import AnalysisItem from '../../../commons/components/AnalysisItem';
import WidgetTitle from '../../../commons/components/WidgetTitle';
import chartImg from './../../../assets/images/chart.png';

export default function Analysis() {
    return (
        <div className="analysis__content">
            <WidgetTitle 
                title = "Phân tích bán hàng" desc = 
                "Dữ liệu tổng quan về các đơn đã đặt"
                link = "/#"
            />
            
            <div className="analysis__widget">
                <div className="analysis--left">
                    <AnalysisItem
                        title="Đã bán"
                        number="0"
                        popover="Tổng số đơn được đặt, gồm cả đơn đã hủy, đã trả hàng, chưa thanh toán hoặc đã thanh toán."
                    />
                    <div className="chart-box">
                        <img src={chartImg} alt="chart" />
                    </div>
                </div>
                <div className="analysis--right">
                    <div className="analysis--row">
                        <AnalysisItem
                            title="Lượt truy cập"
                            number="0"
                            popover="Tổng số khách truy cập (xem trang sản phẩm) từ web và ứng dụng Shopee. Một khách xem nhiều sản phẩm chỉ tính là 1 khách truy cập."
                            isOpenDesc={true}
                        />
                        <AnalysisItem
                            title="Lượt xem"
                            number="0"
                            popover="Tổng số lần xem trang sản phẩm từ web và ứng dụng Barista."
                            isOpenDesc={true}
                        />
                    </div>
                    <div className="analysis--row">
                        <AnalysisItem
                            title="Đơn hàng"
                            number="0"
                            popover="Tổng số đơn được đặt, gồm cả đơn đã hủy, đã trả hàng, chưa thanh toán hoặc đã thanh toán.."
                            isOpenDesc={true}
                        />
                        <AnalysisItem
                            title="Tỉ lệ chuyển đổi"
                            number="0"
                            popover="Số lượng khách truy cập và đặt hàng chia cho tổng số khách truy cập trong khoảng thời gian đã chọn."
                            isOpenDesc={true}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
