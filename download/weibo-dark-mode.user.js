// ==UserScript==
// @name         weibo-dark-mode
// @namespace    weibo-dark-mode-by-naoyeye
// @version      0.0.2
// @description  Make Weibo Dark Again!
// @author       naoyeye
// @homepage     http://han.im
// @website      https://naoyeye.github.io/bedarkmode/
// @include      https://weibo.com/*
// @include      https://www.weibo.com/*
// @updateURL    https://naoyeye.github.io/bedarkmode/download/weibo-dark-mode.user.js
// @downloadURL  https://naoyeye.github.io/bedarkmode/download/weibo-dark-mode.user.js
// @supportURL   https://github.com/naoyeye/bedarkmode/issues
// @grant        none
// ==/UserScript==

(() => {
  let domStyle = document.createElement('style');
  domStyle.innerText = `
    /* ====== */
    body,
    .S_page,
    .WB_frame {
      background: #191919 !important;
    }

    .WB_feed_handle .WB_row_line .W_arrow_bor em {
      margin-top: 0;
    }

    .S_bg1_br {
      border-color: #252525;
      border-top-color: #303030 !important;
      border-right-color: #303030 !important;
      border-left-color: #303030 !important;
    }

    .WB_feed_handle .S_bg1_br {
      border-color: #252525 !important;
      border-top-color: #303030 !important;
      border-right-color: #303030 !important;
      border-left-color: #303030 !important;
    }

    .S_bg2_br {
      border-color: #303030 !important;
    }

    .W_arrow_bor_tno i {
      border-bottom-color: transparent !important;
    }

    .WB_notes {
      background: #666;
      color: #383939;
    }

    .S_bg2,
    blockquote,
    .W_btn_b,
    .W_input,
    .SW_fun_bg,
    .send_weibo .input {
      background: #303030 !important;
    }

    .S_bg3 {
      background: #1b1b1b !important;
    }

    .WB_feed_repeat .repeat_list .list_li {
      border-color: #252525  !important;
    }

    .WB_global_nav {
      background: #252525;
      border: 0;
      border-bottom: 1px solid #000000;
      box-shadow: 0 0 2px 0 rgba(255, 255, 255, .2) inset;
    }

    .WB_global_nav .gn_search_v2 {
      background: #333;
      border-radius: 15px;
      border: 1px solid #5C5D5D;
      overflow: hidden;
    }

    .S_line1, .W_btn_prev, .W_btn_next, .W_btn_b {
      border-color: initial;
    }

    .WB_global_nav .gn_search_v2.gn_clicked_v2 {
      background: #444;
    }

    body, legend, .W_input:focus, .S_txt1, .W_btn_b, .SW_fun .S_func1 {
      color: #888 !important;
    }

    .WB_notes a, .WB_notes .wrap {
      color: #3099ea !important;
    }

    .S_line3, .W_input, .send_weibo .input, .W_btn_b:hover

    .S_line3, .W_input, .send_weibo .input, .W_btn_b:hover {
      border-color: transparent !important;
      background: #444 !important;
    }
    .send_weibo .input.clicked {
      border-color: #666;
    }

    .S_bg1, .SW_fun_bg:hover, .SW_fun_bg_active {
      background-color: #252525 !important;
    }

    .S_line2,
    .S_line1 {
      border-color: #3e3e3d !important;
    }

    .weibo_player .rec_card {
      border-top: #444 solid 1px;
    }

    .W_layer .content {
      background: #555;
    }

    .W_layer .W_layer_title {
      border-color: #333;
    }

    .W_btn_a {
      background: #8ad78f;
      border: 1px solid #7cc281;
    }

    .W_btn_a_disable, .W_btn_a_disable:hover {
      background: #7cc281;
    }

    /* ====== */

    .WB_miniblog {
      background: none !important;
    }

    .WB_frame_a,
    .WB_main_l,
    #v6_pl_leftnav_group,
    .send_weibo .title_area,
    .WB_main_r,
    #WB_webim,
    .WB_frame_b,
    .Live_tab_b,
    .weibo_player .weibo_player_fc_v2,
    .Live_sidebar {
      display: none;
    }


    .WB_frame,
    .WB_frame #plc_main,
    .WB_main_c,
    .WB_frame_c {
      width: 600px;
    }

    .B_page .WB_frame {
      width: 640px;
    }

    .B_page .WB_frame #plc_main,
    .B_page .WB_frame #plc_main .WB_frame_c {
      width: 640px;
    }

    .WB_global_nav .gn_header {
      width: 700px;
    }

    /* 未登录首页 */
    .FRAME_login .WB_frame,
    .FRAME_login .WB_frame #plc_main {
      width: 1030px;
    }

    .FRAME_login .WB_frame_c {
      width: 660px;
    }
    .FRAME_login .WB_main_r {
      display: inline-block;
    }

    .WB_global_nav .gn_position {
      margin: 0;
    }

    .WB_global_nav .ficon_send {
      background: #8ad78f;
      background: -webkit-linear-gradient(top, #8ad78f 0%,#8ad78f 100%);
      background: linear-gradient(top bottom, #8ad78f 0%,#8ad78f 100%);
    }

    .WB_global_nav .ficon_send:hover {
      background: #81c986;
      background: -webkit-linear-gradient(top, #81c986 0%,#81c986 100%);
      background: linear-gradient(top bottom, #81c986 0%,#81c986 100%);
    }

    .WB_global_nav a, .WB_global_nav .S_link1, .WB_global_nav a.S_txt1:hover, .WB_global_nav a:hover .S_txt1, .WB_global_nav a.current .S_txt1, .WB_global_nav a.S_txt2:hover, .WB_global_nav .SW_fun:hover .S_func1 {
      color: #fff;
    }

    .WB_global_nav .S_txt1, .WB_global_nav .SW_fun .S_func1 {
      color: #888;
    }

    .weibo_player .info_bot .bot_name {
      color: #888;
    }

    .WB_global_nav .gn_logo {
      line-height: 48px;
    }

    .WB_global_nav .gn_logo .box {
      display: block;
      position: static;
      width: auto;
      height: auto;
      text-align: center;
    }

    .WB_global_nav .gn_logo .box:after {
      content: '首页';
      font-size: 14px;
      color: #888;
    }

    .WB_global_nav .gn_logo .box .logo,
    .WB_global_nav_v2 .gn_nav_list li:nth-child(1),
    .WB_global_nav_v2 .gn_nav_list li:nth-child(2),
    .WB_global_nav_v2 .gn_nav_list li:nth-child(3),
    .WB_global_nav_v2 .gn_nav_list li:nth-child(4) {
      display: none;
    }

    /* 视频页面 */
    .weibo_player .weibo_player_wrap {
      width: 700px;
    }

    .weibo_player .info_bot {
      border-top: 1px solid #555;
    }

    .weibo_TV .Live_sidebar li a {
      background: #555;
      color: #888
    }

    .weibo_TV .Live_sidebar ul {
      background: none;
    }

    .weibo_TV .Live_sidebar li:hover a,
    .weibo_TV .Live_sidebar li.curr a {
      background: #444;
      color: #777
    }

    .W_input:focus,
    .W_input_focus {
      border-color: #7cc281 !important;
    }

    `
  document.head.appendChild(domStyle);


})();