<template>
<div data-v-35ad745e="" class="main" style="padding-bottom: 55px;">
    <div data-v-35ad745e="" class="records">
        <div data-v-35ad745e="" class="jianbian" style="background: none"></div>
        <div data-v-35ad745e="" class="records_top" style="background-image: none">
            <div data-v-35ad745e="" class="records_top1">
                <p data-v-35ad745e="" style="font-size: .266667rem;">Orders Record</p>
                <p data-v-35ad745e="" style="font-size: 0.56rem;">0.00</p>
            </div>
            <div data-v-35ad745e="" class="records_top1">
                <p data-v-35ad745e="">This data is made up ofOfficially provided</p>
                <p data-v-35ad745e="">Remaining available assets ($)</p>
            </div>
        </div>
        <div data-v-35ad745e="" class="records_box">
            <div data-v-35ad745e="" class="mint-loadmore">
                <div class="mint-loadmore-content">
                    <div class="mint-loadmore-top">
                        <!----><span class="mint-loadmore-text">Pull down to refresh</span>
                    </div>
                    <div data-v-35ad745e="" class="van-tabs van-tabs--line">
                        <div data-v-35ad745e="">
                            <div data-v-35ad745e="" class="van-sticky">
                                <div data-v-35ad745e="" class="van-tabs__wrap van-hairline--top-bottom">
                                    <div data-v-35ad745e="" role="tablist" class="van-tabs__nav van-tabs__nav--line">
                                        <div data-v-35ad745e="" role="tab" class="van-tab van-ellipsis van-tab--active" onclick="window.location.href='/index/order/index'"><span data-v-35ad745e="" class="van-tab__text">All</span>
                                        </div>
                                        <div data-v-35ad745e="" role="tab" class="van-tab van-ellipsis " onclick=""><span data-v-35ad745e="" class="van-tab__text">Pending</span>
                                        </div>
                                        <div data-v-35ad745e="" role="tab" class="van-tab van-ellipsis " onclick="'"><span data-v-35ad745e="" class="van-tab__text">Completed</span>
                                        </div>
                                        <div data-v-35ad745e="" role="tab" class="van-tab van-ellipsis " onclick="window.location.href='/index/order/index.html?status=5'"><span data-v-35ad745e="" class="van-tab__text">Freezing</span>
                                        </div>
                                        <div data-v-35ad745e="" class="van-tabs__line" style="background-color: #26a5c8"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-v-35ad745e="" class="van-tabs__content" id="cnzl" style="display: none">
                            <div data-v-35ad745e="" role="tabpanel" class="van-tab__pane">
                                <div data-v-35ad745e="" role="feed" class="van-list"><span class="notdata"></span>
                                    <div data-v-35ad745e="" class="van-list__placeholder">
                                        <div data-v-35ad745e="" class="no_more" style="display: none;">No more data</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-v-35ad745e="" class="van-tabs__content" id="enzl" style="display: block;">
                            <div data-v-35ad745e="" role="tabpanel" class="van-tab__pane">
                                <div data-v-35ad745e="" role="feed" class="van-list"><span class="notdata"></span>
                                    <div data-v-35ad745e="" class="van-list__placeholder">
                                        <div data-v-35ad745e="" class="no_more" style="display: none;">No more data</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-v-35ad745e="" class="van-tabs__content" id="vnzl" style="display: none">
                            <div data-v-35ad745e="" role="tabpanel" class="van-tab__pane">
                                <div data-v-35ad745e="" role="feed" class="van-list"><span class="notdata"></span>
                                    <div data-v-35ad745e="" class="van-list__placeholder">
                                        <div data-v-35ad745e="" class="no_more" style="display: none;">No more data</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-v-35ad745e="" class="van-tabs__content" id="jnzl" style="display: none">
                            <div data-v-35ad745e="" role="tabpanel" class="van-tab__pane">
                                <div data-v-35ad745e="" role="feed" class="van-list"><span class="notdata"></span>
                                    <div data-v-35ad745e="" class="van-list__placeholder">
                                        <div data-v-35ad745e="" class="no_more" style="display: none;">No more data</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div data-v-4c2dcb20="" class="" style="" id="orderDetail">
        <div data-v-4c2dcb20="" class="van-overlay" style="z-index: 1000;padding: 0 10px;display:none ;">
            <div data-v-4c2dcb20="" class="grabSuccess" style="width: 100%;;">
                <div data-v-4c2dcb20="" class="title" style="height: 1.586667rem;">
                    <h1 id="cngx" style="display: none">待处理订单</h1>
                    <h2 id="engx" style="display: block;">pending order</h2>
                    <h2 id="vngx" style="display: none">Chi Tiết Đơn hàng</h2>
                    <h2 id="jngx" style="display: none">未決注文</h2>
                </div>
                <div data-v-4c2dcb20="" class="records_tabs_box">
                    <div data-v-4c2dcb20="" class="records_tabs_box_top">Grab time：<span id="otime"></span>order number：<span id="oid"></span>
                    </div><img data-v-4c2dcb20="" src="data:image/png;base64,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" class="records_tabs_box_img" style="display: none;" id="cncg"><img data-v-4c2dcb20="" src="/icon/en/succ.png" class="records_tabs_box_img" style="display: block;" id="encg"><img data-v-4c2dcb20="" src="/icon/vn/succ.png" class="records_tabs_box_img" style="display: none;" id="vncg"><img data-v-4c2dcb20="" src="/icon/jn/succ.png" class="records_tabs_box_img" style="display: none;" id="jncg">
                    <div data-v-4c2dcb20="" class="records_tabs_box_des">
                        <div data-v-4c2dcb20="" class="tabs_box_des_img"><img data-v-4c2dcb20="" alt="" id="oimg" src="/static_new6/img/wenhao.png">
                        </div>
                        <div data-v-4c2dcb20="" class="tabs_box_des_r">
                            <p data-v-4c2dcb20="" class="tabs_box_des_r_tit" id="otitle"></p>
                            <div data-v-4c2dcb20="" class="tabs_box_des_r_pic">
                                <p data-v-4c2dcb20="" id="oprice"></p>
                                <p data-v-4c2dcb20="" id="onum"></p>
                            </div>
                        </div>
                    </div>
                    <div data-v-4c2dcb20="" class="tabs_box_des_r_pic">
                        <p data-v-4c2dcb20="" class="gray">Goods Platform</p>
                        <p data-v-4c2dcb20="" id="oshop_name"></p>
                    </div>
                    <div data-v-4c2dcb20="" class="tabs_box_des_r_pic">
                        <p data-v-4c2dcb20="" class="gray">Return Ratio(%)</p>
                        <p data-v-4c2dcb20="" id="oodd"></p>
                    </div>
                    <div data-v-4c2dcb20="" class="tabs_box_des_r_pic">
                        <p data-v-4c2dcb20="" class="gray">Available Balance</p>
                        <p data-v-4c2dcb20="" id="obalance"></p>
                    </div>
                    <div data-v-4c2dcb20="" class="tabs_box_des_r_pic">
                        <p data-v-4c2dcb20="" class="gray">Commission Calculation</p>
                        <p data-v-4c2dcb20="" id="ogongshi"></p>
                    </div>
                    <div data-v-4c2dcb20="" class="tabs_box_des_r_pic">
                        <p data-v-4c2dcb20="" class="gray">Commission</p>
                        <p data-v-4c2dcb20="">USD <span id="yongjin"></span>
                        </p>
                    </div>
                    <div data-v-4c2dcb20="" class="tabs_box_des_r_pic">
                        <p data-v-4c2dcb20="" class="gray">Grand Commission</p>
                        <p data-v-4c2dcb20="" id="oday_deal"></p>
                    </div>
                    <div data-v-4c2dcb20="" class="tabs_box_des_r_pic">
                        <p data-v-4c2dcb20="" class="txt">Completed Orders</p>
                        <p data-v-4c2dcb20="" class="txt1"><span id="oallcount"></span>
                        </p>
                    </div>
                </div>
                <div data-v-4c2dcb20="" class="tabs_btn">
                    <!--                        <div data-v-4c2dcb20="" class="tabs_btn1">Cancel grab orders</div>-->
                    <div data-v-4c2dcb20="" class="tabs_btn2">Submit</div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<style scoped>
.records .jianbian[data-v-35ad745e] {
    position: absolute;
    width: 100%;
    height: 8rem;
    background: linear-gradient(1turn, #fff, #bac3d2)
}
.records .records_top[data-v-35ad745e] {
    width: 100%;
    position: relative;
    background-size: 100%
}
.records .records_top .records_top1[data-v-35ad745e] {
    width: 90%;
    margin: auto;
    padding-top: .666667rem;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: justify;
    justify-content: space-between;
    font-size: .64rem;
    font-weight: 600;
    color: #2f3848
}
.records .records_top .records_top1[data-v-35ad745e] {
    width: 90%;
    margin: auto;
    padding-top: .666667rem;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: justify;
    justify-content: space-between;
    font-size: .64rem;
    font-weight: 600;
    color: #2f3848
}

.records .records_top .records_top1[data-v-35ad745e]:nth-child(2) {
    font-size: .266667rem;
    font-weight: 400;
    color: #434343;
    padding: .133333rem 0 .333333rem
}

.mint-loadmore {
    overflow: hidden
}
.mint-loadmore-top {
    margin-top: -.666667rem
}
.mint-loadmore-bottom, .mint-loadmore-top {
    text-align: center;
    height: .666667rem;
    line-height: .666667rem
}
.van-tabs {
    position: relative
}
.van-tabs--line .van-tabs__wrap[data-v-35ad745e] {
    height: 1.12rem
}

</style>