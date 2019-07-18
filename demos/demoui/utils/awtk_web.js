var gAsmModule = null;

function getAsmModule() {
  if(!gAsmModule) {
    var asm = require('awtk_asm.js')
    gAsmModule = asm.Module;
  }

  return gAsmModule;
}


const g_awtk_assets = {
  image: [
    {name:"pointer_4", uri:"assets/raw/images/svg/pointer_4.bsvg"},
    {name:"pointer", uri:"assets/raw/images/svg/pointer.svg"},
    {name:"ball", uri:"assets/raw/images/svg/ball.bsvg"},
    {name:"girl", uri:"assets/raw/images/svg/girl.svg"},
    {name:"china", uri:"assets/raw/images/svg/china.bsvg"},
    {name:"ball", uri:"assets/raw/images/svg/ball.svg"},
    {name:"china", uri:"assets/raw/images/svg/china.svg"},
    {name:"pointer_4", uri:"assets/raw/images/svg/pointer_4.svg"},
    {name:"pointer_1", uri:"assets/raw/images/svg/pointer_1.svg"},
    {name:"pointer_1", uri:"assets/raw/images/svg/pointer_1.bsvg"},
    {name:"pointer", uri:"assets/raw/images/svg/pointer.bsvg"},
    {name:"girl", uri:"assets/raw/images/svg/girl.bsvg"},
    {name:"info", uri:"assets/raw/images/x1/info.png", w:24, h:24},
    {name:"me", uri:"assets/raw/images/x1/me.png", w:24, h:24},
    {name:"middle_off", uri:"assets/raw/images/x1/middle_off.png", w:24, h:24},
    {name:"red_btn_p", uri:"assets/raw/images/x1/red_btn_p.png", w:30, h:30},
    {name:"check", uri:"assets/raw/images/x1/check.png", w:24, h:24},
    {name:"cursor", uri:"assets/raw/images/x1/cursor.png", w:16, h:16},
    {name:"green_btn_n", uri:"assets/raw/images/x1/green_btn_n.png", w:30, h:30},
    {name:"muted", uri:"assets/raw/images/x1/muted.png", w:24, h:24},
    {name:"num_dot", uri:"assets/raw/images/x1/num_dot.jpg", w:16, h:48},
    {name:"arrow_down_o", uri:"assets/raw/images/x1/arrow_down_o.png", w:24, h:24},
    {name:"rgb", uri:"assets/raw/images/x1/rgb.png", w:30, h:30},
    {name:"arrow_down_n", uri:"assets/raw/images/x1/arrow_down_n.png", w:24, h:24},
    {name:"green_btn_o", uri:"assets/raw/images/x1/green_btn_o.png", w:30, h:30},
    {name:"msg_active", uri:"assets/raw/images/x1/msg_active.png", w:24, h:24},
    {name:"play_n", uri:"assets/raw/images/x1/play_n.png", w:24, h:24},
    {name:"radio_checked", uri:"assets/raw/images/x1/radio_checked.png", w:24, h:24},
    {name:"middle_on", uri:"assets/raw/images/x1/middle_on.png", w:24, h:24},
    {name:"msg", uri:"assets/raw/images/x1/msg.png", w:24, h:24},
    {name:"play_o", uri:"assets/raw/images/x1/play_o.png", w:24, h:24},
    {name:"bricks", uri:"assets/raw/images/x1/bricks.png", w:60, h:60},
    {name:"shifton", uri:"assets/raw/images/x1/shifton.png", w:16, h:16},
    {name:"active_dot", uri:"assets/raw/images/x1/active_dot.png", w:10, h:10},
    {name:"question", uri:"assets/raw/images/x1/question.png", w:24, h:24},
    {name:"zh", uri:"assets/raw/images/x1/zh.png", w:24, h:24},
    {name:"discovery_active", uri:"assets/raw/images/x1/discovery_active.png", w:24, h:24},
    {name:"dot", uri:"assets/raw/images/x1/dot.png", w:10, h:10},
    {name:"rgba", uri:"assets/raw/images/x1/rgba.png", w:30, h:30},
    {name:"empty", uri:"assets/raw/images/x1/empty.png", w:24, h:24},
    {name:"battery_0", uri:"assets/raw/images/x1/battery_0.png", w:57, h:32},
    {name:"num_0", uri:"assets/raw/images/x1/num_0.jpg", w:30, h:48},
    {name:"slider_v_fg", uri:"assets/raw/images/x1/slider_v_fg.png", w:8, h:30},
    {name:"ani1", uri:"assets/raw/images/x1/ani1.png", w:70, h:70},
    {name:"visible", uri:"assets/raw/images/x1/visible.png", w:16, h:16},
    {name:"edit_clear_p", uri:"assets/raw/images/x1/edit_clear_p.png", w:24, h:24},
    {name:"arrow_up_o", uri:"assets/raw/images/x1/arrow_up_o.png", w:24, h:24},
    {name:"arrow_up_n", uri:"assets/raw/images/x1/arrow_up_n.png", w:24, h:24},
    {name:"left_on", uri:"assets/raw/images/x1/left_on.png", w:24, h:24},
    {name:"num_1", uri:"assets/raw/images/x1/num_1.jpg", w:30, h:48},
    {name:"battery_1", uri:"assets/raw/images/x1/battery_1.png", w:57, h:32},
    {name:"arrow_right_p", uri:"assets/raw/images/x1/arrow_right_p.png", w:24, h:24},
    {name:"battery_3", uri:"assets/raw/images/x1/battery_3.png", w:57, h:32},
    {name:"num_3", uri:"assets/raw/images/x1/num_3.jpg", w:30, h:48},
    {name:"slider_drag_o", uri:"assets/raw/images/x1/slider_drag_o.png", w:28, h:28},
    {name:"guage_bg", uri:"assets/raw/images/x1/guage_bg.jpg", w:240, h:240},
    {name:"en", uri:"assets/raw/images/x1/en.png", w:24, h:24},
    {name:"ani2", uri:"assets/raw/images/x1/ani2.png", w:70, h:70},
    {name:"arrow_left_n", uri:"assets/raw/images/x1/arrow_left_n.png", w:24, h:24},
    {name:"clock_second", uri:"assets/raw/images/x1/clock_second.png", w:2, h:180},
    {name:"arrow_left_o", uri:"assets/raw/images/x1/arrow_left_o.png", w:24, h:24},
    {name:"ani3", uri:"assets/raw/images/x1/ani3.png", w:70, h:70},
    {name:"num_2", uri:"assets/raw/images/x1/num_2.jpg", w:30, h:48},
    {name:"battery_2", uri:"assets/raw/images/x1/battery_2.png", w:57, h:32},
    {name:"num_6", uri:"assets/raw/images/x1/num_6.jpg", w:30, h:48},
    {name:"ania", uri:"assets/raw/images/x1/ania.png", w:70, h:70},
    {name:"ani7", uri:"assets/raw/images/x1/ani7.png", w:70, h:70},
    {name:"shift", uri:"assets/raw/images/x1/shift.png", w:16, h:16},
    {name:"ani6", uri:"assets/raw/images/x1/ani6.png", w:70, h:70},
    {name:"close_p", uri:"assets/raw/images/x1/close_p.png", w:24, h:24},
    {name:"num_7", uri:"assets/raw/images/x1/num_7.jpg", w:30, h:48},
    {name:"checked", uri:"assets/raw/images/x1/checked.png", w:24, h:24},
    {name:"battery_5", uri:"assets/raw/images/x1/battery_5.png", w:57, h:32},
    {name:"num_5", uri:"assets/raw/images/x1/num_5.jpg", w:30, h:48},
    {name:"anib", uri:"assets/raw/images/x1/anib.png", w:70, h:70},
    {name:"ani4", uri:"assets/raw/images/x1/ani4.png", w:70, h:70},
    {name:"me_active", uri:"assets/raw/images/x1/me_active.png", w:24, h:24},
    {name:"ani5", uri:"assets/raw/images/x1/ani5.png", w:70, h:70},
    {name:"anic", uri:"assets/raw/images/x1/anic.png", w:70, h:70},
    {name:"earth", uri:"assets/raw/images/x1/earth.png", w:24, h:24},
    {name:"contact_active", uri:"assets/raw/images/x1/contact_active.png", w:24, h:24},
    {name:"dialog_title", uri:"assets/raw/images/x1/dialog_title.png", w:60, h:30},
    {name:"num_4", uri:"assets/raw/images/x1/num_4.jpg", w:30, h:48},
    {name:"close_d", uri:"assets/raw/images/x1/close_d.png", w:24, h:24},
    {name:"battery_4", uri:"assets/raw/images/x1/battery_4.png", w:57, h:32},
    {name:"contact", uri:"assets/raw/images/x1/contact.png", w:24, h:24},
    {name:"slider_fg", uri:"assets/raw/images/x1/slider_fg.png", w:30, h:8},
    {name:"arrow_right_o", uri:"assets/raw/images/x1/arrow_right_o.png", w:24, h:24},
    {name:"num_9", uri:"assets/raw/images/x1/num_9.jpg", w:30, h:48},
    {name:"ani8", uri:"assets/raw/images/x1/ani8.png", w:70, h:70},
    {name:"edit_clear_n", uri:"assets/raw/images/x1/edit_clear_n.png", w:24, h:24},
    {name:"arrow_up_p", uri:"assets/raw/images/x1/arrow_up_p.png", w:24, h:24},
    {name:"edit_clear_o", uri:"assets/raw/images/x1/edit_clear_o.png", w:24, h:24},
    {name:"ani9", uri:"assets/raw/images/x1/ani9.png", w:70, h:70},
    {name:"find", uri:"assets/raw/images/x1/find.png", w:24, h:24},
    {name:"discovery", uri:"assets/raw/images/x1/discovery.png", w:24, h:24},
    {name:"num_8", uri:"assets/raw/images/x1/num_8.jpg", w:30, h:48},
    {name:"arrow_right_n", uri:"assets/raw/images/x1/arrow_right_n.png", w:24, h:24},
    {name:"backspace", uri:"assets/raw/images/x1/backspace.png", w:16, h:16},
    {name:"arrow_left_p", uri:"assets/raw/images/x1/arrow_left_p.png", w:24, h:24},
    {name:"clock_hour", uri:"assets/raw/images/x1/clock_hour.png", w:20, h:82},
    {name:"slider_drag_p", uri:"assets/raw/images/x1/slider_drag_p.png", w:28, h:28},
    {name:"logo", uri:"assets/raw/images/x1/logo.png", w:160, h:40},
    {name:"invisible", uri:"assets/raw/images/x1/invisible.png", w:16, h:16},
    {name:"close_o", uri:"assets/raw/images/x1/close_o.png", w:24, h:24},
    {name:"clock_bg", uri:"assets/raw/images/x1/clock_bg.jpg", w:300, h:300},
    {name:"cross", uri:"assets/raw/images/x1/cross.png", w:32, h:32},
    {name:"clock_minute", uri:"assets/raw/images/x1/clock_minute.png", w:12, h:135},
    {name:"radio_unchecked", uri:"assets/raw/images/x1/radio_unchecked.png", w:24, h:24},
    {name:"switch", uri:"assets/raw/images/x1/switch.png", w:90, h:22},
    {name:"close_n", uri:"assets/raw/images/x1/close_n.png", w:24, h:24},
    {name:"clock", uri:"assets/raw/images/x1/clock.png", w:42, h:42},
    {name:"unchecked", uri:"assets/raw/images/x1/unchecked.png", w:24, h:24},
    {name:"red_btn_n", uri:"assets/raw/images/x1/red_btn_n.png", w:30, h:30},
    {name:"slider_drag", uri:"assets/raw/images/x1/slider_drag.png", w:28, h:28},
    {name:"red_btn_o", uri:"assets/raw/images/x1/red_btn_o.png", w:30, h:30},
    {name:"green_btn_p", uri:"assets/raw/images/x1/green_btn_p.png", w:30, h:30},
    {name:"arrow_down_p", uri:"assets/raw/images/x1/arrow_down_p.png", w:24, h:24},
    {name:"warn", uri:"assets/raw/images/x1/warn.png", w:24, h:24},
    {name:"slider_v_bg", uri:"assets/raw/images/x1/slider_v_bg.png", w:8, h:30},
    {name:"right_on", uri:"assets/raw/images/x1/right_on.png", w:24, h:24},
    {name:"2", uri:"assets/raw/images/x1/2.jpg", w:100, h:73},
    {name:"slider_bg", uri:"assets/raw/images/x1/slider_bg.png", w:30, h:8},
    {name:"guage_pointer", uri:"assets/raw/images/x1/guage_pointer.png", w:24, h:144},
    {name:"play_p", uri:"assets/raw/images/x1/play_p.png", w:24, h:24},
    {name:"unmuted", uri:"assets/raw/images/x1/unmuted.png", w:24, h:24},
    {name:"right_off", uri:"assets/raw/images/x1/right_off.png", w:24, h:24},
    {name:"message", uri:"assets/raw/images/x1/message.png", w:24, h:24},
    {name:"3", uri:"assets/raw/images/x1/3.jpg", w:100, h:73},
    {name:"1", uri:"assets/raw/images/x1/1.jpg", w:128, h:128},
    {name:"progress_circle", uri:"assets/raw/images/x1/progress_circle.png", w:100, h:100},
    {name:"bee", uri:"assets/raw/images/x1/bee.gif", w:80, h:80},
    {name:"left_off", uri:"assets/raw/images/x1/left_off.png", w:24, h:24},
    {name:"bg_landscape_1", uri:"assets/raw/images/xx/bg_landscape_1.jpg", w:800, h:600},
    {name:"bg_landscape_2", uri:"assets/raw/images/xx/bg_landscape_2.jpg", w:800, h:600},
    {name:"flag_none", uri:"assets/raw/images/xx/flag_none.jpg", w:77, h:64},
    {name:"bg_landscape_3", uri:"assets/raw/images/xx/bg_landscape_3.jpg", w:800, h:600},
    {name:"bg_portrait_1", uri:"assets/raw/images/xx/bg_portrait_1.jpg", w:320, h:480},
    {name:"bg_portrait_2", uri:"assets/raw/images/xx/bg_portrait_2.jpg", w:600, h:800},
    {name:"flag_CN", uri:"assets/raw/images/xx/flag_CN.png", w:97, h:64},
    {name:"bg_portrait_3", uri:"assets/raw/images/xx/bg_portrait_3.jpg", w:600, h:800},
    {name:"flag_US", uri:"assets/raw/images/xx/flag_US.png", w:96, h:64},
    {name:"info", uri:"assets/raw/images/x3/info.png", w:64, h:64},
    {name:"me", uri:"assets/raw/images/x3/me.png", w:64, h:64},
    {name:"middle_off", uri:"assets/raw/images/x3/middle_off.png", w:64, h:64},
    {name:"check", uri:"assets/raw/images/x3/check.png", w:64, h:64},
    {name:"muted", uri:"assets/raw/images/x3/muted.png", w:64, h:64},
    {name:"arrow_down_o", uri:"assets/raw/images/x3/arrow_down_o.png", w:64, h:64},
    {name:"rgb", uri:"assets/raw/images/x3/rgb.png", w:30, h:30},
    {name:"arrow_down_n", uri:"assets/raw/images/x3/arrow_down_n.png", w:64, h:64},
    {name:"msg_active", uri:"assets/raw/images/x3/msg_active.png", w:64, h:64},
    {name:"play_n", uri:"assets/raw/images/x3/play_n.png", w:64, h:64},
    {name:"radio_checked", uri:"assets/raw/images/x3/radio_checked.png", w:64, h:64},
    {name:"middle_on", uri:"assets/raw/images/x3/middle_on.png", w:64, h:64},
    {name:"msg", uri:"assets/raw/images/x3/msg.png", w:64, h:64},
    {name:"play_o", uri:"assets/raw/images/x3/play_o.png", w:64, h:64},
    {name:"question", uri:"assets/raw/images/x3/question.png", w:64, h:64},
    {name:"discovery_active", uri:"assets/raw/images/x3/discovery_active.png", w:64, h:64},
    {name:"rgba", uri:"assets/raw/images/x3/rgba.png", w:30, h:30},
    {name:"edit_clear_p", uri:"assets/raw/images/x3/edit_clear_p.png", w:64, h:64},
    {name:"arrow_up_o", uri:"assets/raw/images/x3/arrow_up_o.png", w:64, h:64},
    {name:"arrow_up_n", uri:"assets/raw/images/x3/arrow_up_n.png", w:64, h:64},
    {name:"left_on", uri:"assets/raw/images/x3/left_on.png", w:64, h:64},
    {name:"arrow_right_p", uri:"assets/raw/images/x3/arrow_right_p.png", w:64, h:64},
    {name:"arrow_left_n", uri:"assets/raw/images/x3/arrow_left_n.png", w:64, h:64},
    {name:"arrow_left_o", uri:"assets/raw/images/x3/arrow_left_o.png", w:64, h:64},
    {name:"checked", uri:"assets/raw/images/x3/checked.png", w:64, h:64},
    {name:"me_active", uri:"assets/raw/images/x3/me_active.png", w:64, h:64},
    {name:"earth", uri:"assets/raw/images/x3/earth.png", w:64, h:64},
    {name:"contact_active", uri:"assets/raw/images/x3/contact_active.png", w:64, h:64},
    {name:"contact", uri:"assets/raw/images/x3/contact.png", w:64, h:64},
    {name:"arrow_right_o", uri:"assets/raw/images/x3/arrow_right_o.png", w:64, h:64},
    {name:"edit_clear_n", uri:"assets/raw/images/x3/edit_clear_n.png", w:64, h:64},
    {name:"arrow_up_p", uri:"assets/raw/images/x3/arrow_up_p.png", w:64, h:64},
    {name:"edit_clear_o", uri:"assets/raw/images/x3/edit_clear_o.png", w:64, h:64},
    {name:"find", uri:"assets/raw/images/x3/find.png", w:64, h:64},
    {name:"discovery", uri:"assets/raw/images/x3/discovery.png", w:64, h:64},
    {name:"arrow_right_n", uri:"assets/raw/images/x3/arrow_right_n.png", w:64, h:64},
    {name:"arrow_left_p", uri:"assets/raw/images/x3/arrow_left_p.png", w:64, h:64},
    {name:"logo", uri:"assets/raw/images/x3/logo.png", w:300, h:77},
    {name:"radio_unchecked", uri:"assets/raw/images/x3/radio_unchecked.png", w:64, h:64},
    {name:"switch", uri:"assets/raw/images/x3/switch.png", w:360, h:90},
    {name:"unchecked", uri:"assets/raw/images/x3/unchecked.png", w:64, h:64},
    {name:"arrow_down_p", uri:"assets/raw/images/x3/arrow_down_p.png", w:64, h:64},
    {name:"warn", uri:"assets/raw/images/x3/warn.png", w:64, h:64},
    {name:"right_on", uri:"assets/raw/images/x3/right_on.png", w:64, h:64},
    {name:"play_p", uri:"assets/raw/images/x3/play_p.png", w:64, h:64},
    {name:"unmuted", uri:"assets/raw/images/x3/unmuted.png", w:64, h:64},
    {name:"right_off", uri:"assets/raw/images/x3/right_off.png", w:64, h:64},
    {name:"message", uri:"assets/raw/images/x3/message.png", w:128, h:128},
    {name:"1", uri:"assets/raw/images/x3/1.jpg", w:128, h:128},
    {name:"progress_circle", uri:"assets/raw/images/x3/progress_circle.png", w:100, h:100},
    {name:"left_off", uri:"assets/raw/images/x3/left_off.png", w:64, h:64},
    {name:"info", uri:"assets/raw/images/x2/info.png", w:48, h:48},
    {name:"me", uri:"assets/raw/images/x2/me.png", w:48, h:48},
    {name:"middle_off", uri:"assets/raw/images/x2/middle_off.png", w:48, h:48},
    {name:"red_btn_p", uri:"assets/raw/images/x2/red_btn_p.png", w:30, h:30},
    {name:"check", uri:"assets/raw/images/x2/check.png", w:48, h:48},
    {name:"cursor", uri:"assets/raw/images/x2/cursor.png", w:16, h:16},
    {name:"green_btn_n", uri:"assets/raw/images/x2/green_btn_n.png", w:30, h:30},
    {name:"muted", uri:"assets/raw/images/x2/muted.png", w:48, h:48},
    {name:"num_dot", uri:"assets/raw/images/x2/num_dot.jpg", w:20, h:60},
    {name:"arrow_down_o", uri:"assets/raw/images/x2/arrow_down_o.png", w:48, h:48},
    {name:"rgb", uri:"assets/raw/images/x2/rgb.png", w:30, h:30},
    {name:"arrow_down_n", uri:"assets/raw/images/x2/arrow_down_n.png", w:48, h:48},
    {name:"green_btn_o", uri:"assets/raw/images/x2/green_btn_o.png", w:30, h:30},
    {name:"msg_active", uri:"assets/raw/images/x2/msg_active.png", w:48, h:48},
    {name:"play_n", uri:"assets/raw/images/x2/play_n.png", w:48, h:48},
    {name:"radio_checked", uri:"assets/raw/images/x2/radio_checked.png", w:48, h:48},
    {name:"middle_on", uri:"assets/raw/images/x2/middle_on.png", w:48, h:48},
    {name:"msg", uri:"assets/raw/images/x2/msg.png", w:48, h:48},
    {name:"play_o", uri:"assets/raw/images/x2/play_o.png", w:48, h:48},
    {name:"bricks", uri:"assets/raw/images/x2/bricks.png", w:60, h:60},
    {name:"shifton", uri:"assets/raw/images/x2/shifton.png", w:32, h:32},
    {name:"active_dot", uri:"assets/raw/images/x2/active_dot.png", w:16, h:16},
    {name:"question", uri:"assets/raw/images/x2/question.png", w:48, h:48},
    {name:"zh", uri:"assets/raw/images/x2/zh.png", w:48, h:48},
    {name:"discovery_active", uri:"assets/raw/images/x2/discovery_active.png", w:48, h:48},
    {name:"dot", uri:"assets/raw/images/x2/dot.png", w:16, h:16},
    {name:"rgba", uri:"assets/raw/images/x2/rgba.png", w:30, h:30},
    {name:"empty", uri:"assets/raw/images/x2/empty.png", w:24, h:24},
    {name:"battery_0", uri:"assets/raw/images/x2/battery_0.png", w:57, h:32},
    {name:"num_0", uri:"assets/raw/images/x2/num_0.jpg", w:38, h:60},
    {name:"slider_v_fg", uri:"assets/raw/images/x2/slider_v_fg.png", w:8, h:30},
    {name:"ani1", uri:"assets/raw/images/x2/ani1.png", w:140, h:140},
    {name:"visible", uri:"assets/raw/images/x2/visible.png", w:32, h:32},
    {name:"edit_clear_p", uri:"assets/raw/images/x2/edit_clear_p.png", w:48, h:48},
    {name:"arrow_up_o", uri:"assets/raw/images/x2/arrow_up_o.png", w:48, h:48},
    {name:"arrow_up_n", uri:"assets/raw/images/x2/arrow_up_n.png", w:48, h:48},
    {name:"left_on", uri:"assets/raw/images/x2/left_on.png", w:48, h:48},
    {name:"num_1", uri:"assets/raw/images/x2/num_1.jpg", w:38, h:60},
    {name:"battery_1", uri:"assets/raw/images/x2/battery_1.png", w:57, h:32},
    {name:"arrow_right_p", uri:"assets/raw/images/x2/arrow_right_p.png", w:48, h:48},
    {name:"guage_bg", uri:"assets/raw/images/x2/guage_bg.png", w:240, h:240},
    {name:"battery_3", uri:"assets/raw/images/x2/battery_3.png", w:57, h:32},
    {name:"num_3", uri:"assets/raw/images/x2/num_3.jpg", w:38, h:60},
    {name:"slider_drag_o", uri:"assets/raw/images/x2/slider_drag_o.png", w:28, h:28},
    {name:"en", uri:"assets/raw/images/x2/en.png", w:48, h:48},
    {name:"ani2", uri:"assets/raw/images/x2/ani2.png", w:140, h:140},
    {name:"arrow_left_n", uri:"assets/raw/images/x2/arrow_left_n.png", w:48, h:48},
    {name:"clock_second", uri:"assets/raw/images/x2/clock_second.png", w:2, h:180},
    {name:"arrow_left_o", uri:"assets/raw/images/x2/arrow_left_o.png", w:48, h:48},
    {name:"ani3", uri:"assets/raw/images/x2/ani3.png", w:140, h:140},
    {name:"num_2", uri:"assets/raw/images/x2/num_2.jpg", w:38, h:60},
    {name:"battery_2", uri:"assets/raw/images/x2/battery_2.png", w:57, h:32},
    {name:"num_6", uri:"assets/raw/images/x2/num_6.jpg", w:38, h:60},
    {name:"ania", uri:"assets/raw/images/x2/ania.png", w:140, h:140},
    {name:"ani7", uri:"assets/raw/images/x2/ani7.png", w:140, h:140},
    {name:"shift", uri:"assets/raw/images/x2/shift.png", w:32, h:32},
    {name:"ani6", uri:"assets/raw/images/x2/ani6.png", w:140, h:140},
    {name:"close_p", uri:"assets/raw/images/x2/close_p.png", w:48, h:48},
    {name:"num_7", uri:"assets/raw/images/x2/num_7.jpg", w:38, h:60},
    {name:"checked", uri:"assets/raw/images/x2/checked.png", w:48, h:48},
    {name:"battery_5", uri:"assets/raw/images/x2/battery_5.png", w:57, h:32},
    {name:"num_5", uri:"assets/raw/images/x2/num_5.jpg", w:38, h:60},
    {name:"anib", uri:"assets/raw/images/x2/anib.png", w:140, h:140},
    {name:"ani4", uri:"assets/raw/images/x2/ani4.png", w:140, h:140},
    {name:"me_active", uri:"assets/raw/images/x2/me_active.png", w:48, h:48},
    {name:"ani5", uri:"assets/raw/images/x2/ani5.png", w:140, h:140},
    {name:"anic", uri:"assets/raw/images/x2/anic.png", w:140, h:140},
    {name:"earth", uri:"assets/raw/images/x2/earth.png", w:48, h:48},
    {name:"contact_active", uri:"assets/raw/images/x2/contact_active.png", w:48, h:48},
    {name:"dialog_title", uri:"assets/raw/images/x2/dialog_title.png", w:60, h:30},
    {name:"num_4", uri:"assets/raw/images/x2/num_4.jpg", w:38, h:60},
    {name:"close_d", uri:"assets/raw/images/x2/close_d.png", w:48, h:48},
    {name:"battery_4", uri:"assets/raw/images/x2/battery_4.png", w:57, h:32},
    {name:"contact", uri:"assets/raw/images/x2/contact.png", w:48, h:48},
    {name:"slider_fg", uri:"assets/raw/images/x2/slider_fg.png", w:30, h:8},
    {name:"arrow_right_o", uri:"assets/raw/images/x2/arrow_right_o.png", w:48, h:48},
    {name:"num_9", uri:"assets/raw/images/x2/num_9.jpg", w:38, h:60},
    {name:"ani8", uri:"assets/raw/images/x2/ani8.png", w:140, h:140},
    {name:"edit_clear_n", uri:"assets/raw/images/x2/edit_clear_n.png", w:48, h:48},
    {name:"arrow_up_p", uri:"assets/raw/images/x2/arrow_up_p.png", w:48, h:48},
    {name:"edit_clear_o", uri:"assets/raw/images/x2/edit_clear_o.png", w:48, h:48},
    {name:"ani9", uri:"assets/raw/images/x2/ani9.png", w:140, h:140},
    {name:"find", uri:"assets/raw/images/x2/find.png", w:48, h:48},
    {name:"discovery", uri:"assets/raw/images/x2/discovery.png", w:48, h:48},
    {name:"num_8", uri:"assets/raw/images/x2/num_8.jpg", w:38, h:60},
    {name:"arrow_right_n", uri:"assets/raw/images/x2/arrow_right_n.png", w:48, h:48},
    {name:"backspace", uri:"assets/raw/images/x2/backspace.png", w:32, h:32},
    {name:"arrow_left_p", uri:"assets/raw/images/x2/arrow_left_p.png", w:48, h:48},
    {name:"clock_hour", uri:"assets/raw/images/x2/clock_hour.png", w:20, h:82},
    {name:"slider_drag_p", uri:"assets/raw/images/x2/slider_drag_p.png", w:28, h:28},
    {name:"logo", uri:"assets/raw/images/x2/logo.png", w:300, h:77},
    {name:"invisible", uri:"assets/raw/images/x2/invisible.png", w:32, h:32},
    {name:"close_o", uri:"assets/raw/images/x2/close_o.png", w:48, h:48},
    {name:"clock_bg", uri:"assets/raw/images/x2/clock_bg.jpg", w:300, h:300},
    {name:"cross", uri:"assets/raw/images/x2/cross.png", w:64, h:64},
    {name:"clock_minute", uri:"assets/raw/images/x2/clock_minute.png", w:12, h:135},
    {name:"radio_unchecked", uri:"assets/raw/images/x2/radio_unchecked.png", w:48, h:48},
    {name:"switch", uri:"assets/raw/images/x2/switch.png", w:180, h:45},
    {name:"close_n", uri:"assets/raw/images/x2/close_n.png", w:48, h:48},
    {name:"clock", uri:"assets/raw/images/x2/clock.png", w:42, h:42},
    {name:"unchecked", uri:"assets/raw/images/x2/unchecked.png", w:48, h:48},
    {name:"red_btn_n", uri:"assets/raw/images/x2/red_btn_n.png", w:30, h:30},
    {name:"slider_drag", uri:"assets/raw/images/x2/slider_drag.png", w:28, h:28},
    {name:"red_btn_o", uri:"assets/raw/images/x2/red_btn_o.png", w:30, h:30},
    {name:"green_btn_p", uri:"assets/raw/images/x2/green_btn_p.png", w:30, h:30},
    {name:"arrow_down_p", uri:"assets/raw/images/x2/arrow_down_p.png", w:48, h:48},
    {name:"warn", uri:"assets/raw/images/x2/warn.png", w:48, h:48},
    {name:"slider_v_bg", uri:"assets/raw/images/x2/slider_v_bg.png", w:8, h:30},
    {name:"right_on", uri:"assets/raw/images/x2/right_on.png", w:48, h:48},
    {name:"2", uri:"assets/raw/images/x2/2.jpg", w:200, h:146},
    {name:"slider_bg", uri:"assets/raw/images/x2/slider_bg.png", w:30, h:8},
    {name:"guage_pointer", uri:"assets/raw/images/x2/guage_pointer.png", w:24, h:144},
    {name:"play_p", uri:"assets/raw/images/x2/play_p.png", w:48, h:48},
    {name:"unmuted", uri:"assets/raw/images/x2/unmuted.png", w:48, h:48},
    {name:"right_off", uri:"assets/raw/images/x2/right_off.png", w:48, h:48},
    {name:"message", uri:"assets/raw/images/x2/message.png", w:64, h:64},
    {name:"3", uri:"assets/raw/images/x2/3.jpg", w:200, h:146},
    {name:"1", uri:"assets/raw/images/x2/1.jpg", w:128, h:128},
    {name:"progress_circle", uri:"assets/raw/images/x2/progress_circle.png", w:100, h:100},
    {name:"bee", uri:"assets/raw/images/x2/bee.gif", w:80, h:80},
    {name:"left_off", uri:"assets/raw/images/x2/left_off.png", w:48, h:48},
  ],
  ui: [
    {name:"label", uri:"assets/raw/ui/label.bin"},
    {name:"menu_left_bottom", uri:"assets/raw/ui/menu_left_bottom.bin"},
    {name:"image_value", uri:"assets/raw/ui/image_value.bin"},
    {name:"system_bar", uri:"assets/raw/ui/system_bar.bin"},
    {name:"slide_up", uri:"assets/raw/ui/slide_up.bin"},
    {name:"auto_play_landscape", uri:"assets/raw/ui/auto_play_landscape.bin"},
    {name:"auto_play_portrait", uri:"assets/raw/ui/auto_play_portrait.bin"},
    {name:"kb_ufloat", uri:"assets/raw/ui/kb_ufloat.bin"},
    {name:"animation", uri:"assets/raw/ui/animation.bin"},
    {name:"menu_up_center", uri:"assets/raw/ui/menu_up_center.bin"},
    {name:"menu_right_bottom", uri:"assets/raw/ui/menu_right_bottom.bin"},
    {name:"list_view", uri:"assets/raw/ui/list_view.bin"},
    {name:"tab_bottom_compact", uri:"assets/raw/ui/tab_bottom_compact.bin"},
    {name:"kb_default", uri:"assets/raw/ui/kb_default.bin"},
    {name:"menu_point", uri:"assets/raw/ui/menu_point.bin"},
    {name:"kb_int", uri:"assets/raw/ui/kb_int.bin"},
    {name:"popdown", uri:"assets/raw/ui/popdown.bin"},
    {name:"scroll_view_h", uri:"assets/raw/ui/scroll_view_h.bin"},
    {name:"slide_down", uri:"assets/raw/ui/slide_down.bin"},
    {name:"hscroll_label", uri:"assets/raw/ui/hscroll_label.bin"},
    {name:"tab_list", uri:"assets/raw/ui/tab_list.bin"},
    {name:"kb_ascii", uri:"assets/raw/ui/kb_ascii.bin"},
    {name:"guage", uri:"assets/raw/ui/guage.bin"},
    {name:"image_animation", uri:"assets/raw/ui/image_animation.bin"},
    {name:"slide_view_h", uri:"assets/raw/ui/slide_view_h.bin"},
    {name:"kb_phone", uri:"assets/raw/ui/kb_phone.bin"},
    {name:"auto_play", uri:"assets/raw/ui/auto_play.bin"},
    {name:"animator", uri:"assets/raw/ui/animator.bin"},
    {name:"memtest", uri:"assets/raw/ui/memtest.bin"},
    {name:"scroll_view", uri:"assets/raw/ui/scroll_view.bin"},
    {name:"list_view_m", uri:"assets/raw/ui/list_view_m.bin"},
    {name:"lua", uri:"assets/raw/ui/lua.bin"},
    {name:"tab_top_compact", uri:"assets/raw/ui/tab_top_compact.bin"},
    {name:"mledit", uri:"assets/raw/ui/mledit.bin"},
    {name:"fade", uri:"assets/raw/ui/fade.bin"},
    {name:"scroll_bar_h", uri:"assets/raw/ui/scroll_bar_h.bin"},
    {name:"menu_down_center", uri:"assets/raw/ui/menu_down_center.bin"},
    {name:"vtranslate", uri:"assets/raw/ui/vtranslate.bin"},
    {name:"calibration_win", uri:"assets/raw/ui/calibration_win.bin"},
    {name:"digit_clock", uri:"assets/raw/ui/digit_clock.bin"},
    {name:"menu_right_top", uri:"assets/raw/ui/menu_right_top.bin"},
    {name:"text_selector", uri:"assets/raw/ui/text_selector.bin"},
    {name:"tab_bottom", uri:"assets/raw/ui/tab_bottom.bin"},
    {name:"list_view_vh", uri:"assets/raw/ui/list_view_vh.bin"},
    {name:"selectm", uri:"assets/raw/ui/selectm.bin"},
    {name:"slide_right", uri:"assets/raw/ui/slide_right.bin"},
    {name:"color_picker_full", uri:"assets/raw/ui/color_picker_full.bin"},
    {name:"htranslate", uri:"assets/raw/ui/htranslate.bin"},
    {name:"rich_text1", uri:"assets/raw/ui/rich_text1.bin"},
    {name:"test_view", uri:"assets/raw/ui/test_view.bin"},
    {name:"list_view_h", uri:"assets/raw/ui/list_view_h.bin"},
    {name:"keyboard", uri:"assets/raw/ui/keyboard.bin"},
    {name:"menu_down_left", uri:"assets/raw/ui/menu_down_left.bin"},
    {name:"rich_text2", uri:"assets/raw/ui/rich_text2.bin"},
    {name:"main", uri:"assets/raw/ui/main.bin"},
    {name:"list_view_d", uri:"assets/raw/ui/list_view_d.bin"},
    {name:"tab_control", uri:"assets/raw/ui/tab_control.bin"},
    {name:"menu_up_right", uri:"assets/raw/ui/menu_up_right.bin"},
    {name:"edit", uri:"assets/raw/ui/edit.bin"},
    {name:"overlay", uri:"assets/raw/ui/overlay.bin"},
    {name:"menu_left_top", uri:"assets/raw/ui/menu_left_top.bin"},
    {name:"gif_image", uri:"assets/raw/ui/gif_image.bin"},
    {name:"vgcanvas", uri:"assets/raw/ui/vgcanvas.bin"},
    {name:"menu_right_middle", uri:"assets/raw/ui/menu_right_middle.bin"},
    {name:"soft_keyboard", uri:"assets/raw/ui/soft_keyboard.bin"},
    {name:"slide_view_h1", uri:"assets/raw/ui/slide_view_h1.bin"},
    {name:"locale", uri:"assets/raw/ui/locale.bin"},
    {name:"svg_image", uri:"assets/raw/ui/svg_image.bin"},
    {name:"basic", uri:"assets/raw/ui/basic.bin"},
    {name:"linear_gradient", uri:"assets/raw/ui/linear_gradient.bin"},
    {name:"rich_text", uri:"assets/raw/ui/rich_text.bin"},
    {name:"color_picker", uri:"assets/raw/ui/color_picker.bin"},
    {name:"combo_box", uri:"assets/raw/ui/combo_box.bin"},
    {name:"menu_left_middle", uri:"assets/raw/ui/menu_left_middle.bin"},
    {name:"slide_view_h2", uri:"assets/raw/ui/slide_view_h2.bin"},
    {name:"color_picker_rgb", uri:"assets/raw/ui/color_picker_rgb.bin"},
    {name:"button", uri:"assets/raw/ui/button.bin"},
    {name:"select1", uri:"assets/raw/ui/select1.bin"},
    {name:"image_list", uri:"assets/raw/ui/image_list.bin"},
    {name:"progress_circle", uri:"assets/raw/ui/progress_circle.bin"},
    {name:"images", uri:"assets/raw/ui/images.bin"},
    {name:"back_to_home", uri:"assets/raw/ui/back_to_home.bin"},
    {name:"stroke_gradient", uri:"assets/raw/ui/stroke_gradient.bin"},
    {name:"slide_view_v2", uri:"assets/raw/ui/slide_view_v2.bin"},
    {name:"kb_float", uri:"assets/raw/ui/kb_float.bin"},
    {name:"big_font", uri:"assets/raw/ui/big_font.bin"},
    {name:"popup", uri:"assets/raw/ui/popup.bin"},
    {name:"color_picker_hsv", uri:"assets/raw/ui/color_picker_hsv.bin"},
    {name:"scroll_bar", uri:"assets/raw/ui/scroll_bar.bin"},
    {name:"slide_view", uri:"assets/raw/ui/slide_view.bin"},
    {name:"slide_view_h_loop", uri:"assets/raw/ui/slide_view_h_loop.bin"},
    {name:"dialog1", uri:"assets/raw/ui/dialog1.bin"},
    {name:"slide_view_v1", uri:"assets/raw/ui/slide_view_v1.bin"},
    {name:"menu_down_right", uri:"assets/raw/ui/menu_down_right.bin"},
    {name:"menu", uri:"assets/raw/ui/menu.bin"},
    {name:"dialog2", uri:"assets/raw/ui/dialog2.bin"},
    {name:"dialogs", uri:"assets/raw/ui/dialogs.bin"},
    {name:"switch", uri:"assets/raw/ui/switch.bin"},
    {name:"preload", uri:"assets/raw/ui/preload.bin"},
    {name:"tab_top", uri:"assets/raw/ui/tab_top.bin"},
    {name:"color", uri:"assets/raw/ui/color.bin"},
    {name:"color_picker_simple", uri:"assets/raw/ui/color_picker_simple.bin"},
    {name:"spinbox", uri:"assets/raw/ui/spinbox.bin"},
    {name:"radial_gradient", uri:"assets/raw/ui/radial_gradient.bin"},
    {name:"slide_left", uri:"assets/raw/ui/slide_left.bin"},
    {name:"scroll_view_v", uri:"assets/raw/ui/scroll_view_v.bin"},
    {name:"slide_view_v_loop", uri:"assets/raw/ui/slide_view_v_loop.bin"},
    {name:"kb_uint", uri:"assets/raw/ui/kb_uint.bin"},
    {name:"time_clock", uri:"assets/raw/ui/time_clock.bin"},
    {name:"kb_hex", uri:"assets/raw/ui/kb_hex.bin"},
    {name:"menu_up_left", uri:"assets/raw/ui/menu_up_left.bin"},
    {name:"slide_menu", uri:"assets/raw/ui/slide_menu.bin"},
    {name:"dragger", uri:"assets/raw/ui/dragger.bin"},
    {name:"language", uri:"assets/raw/ui/language.bin"},
    {name:"slide_view_v", uri:"assets/raw/ui/slide_view_v.bin"},
  ],
  style: [
    {name:"system_bar", uri:"assets/raw/styles/system_bar.bin"},
    {name:"dialog_confirm", uri:"assets/raw/styles/dialog_confirm.bin"},
    {name:"tab_bottom_compact", uri:"assets/raw/styles/tab_bottom_compact.bin"},
    {name:"dialog_info", uri:"assets/raw/styles/dialog_info.bin"},
    {name:"tab_list", uri:"assets/raw/styles/tab_list.bin"},
    {name:"guage", uri:"assets/raw/styles/guage.bin"},
    {name:"tab_top_compact", uri:"assets/raw/styles/tab_top_compact.bin"},
    {name:"digit_clock", uri:"assets/raw/styles/digit_clock.bin"},
    {name:"tab_bottom", uri:"assets/raw/styles/tab_bottom.bin"},
    {name:"keyboard", uri:"assets/raw/styles/keyboard.bin"},
    {name:"edit", uri:"assets/raw/styles/edit.bin"},
    {name:"default", uri:"assets/raw/styles/default.bin"},
    {name:"button", uri:"assets/raw/styles/button.bin"},
    {name:"calibration", uri:"assets/raw/styles/calibration.bin"},
    {name:"big_font", uri:"assets/raw/styles/big_font.bin"},
    {name:"dialog", uri:"assets/raw/styles/dialog.bin"},
    {name:"dialog_toast", uri:"assets/raw/styles/dialog_toast.bin"},
    {name:"tab_top", uri:"assets/raw/styles/tab_top.bin"},
    {name:"dialog_warn", uri:"assets/raw/styles/dialog_warn.bin"},
    {name:"color", uri:"assets/raw/styles/color.bin"},
    {name:"slide_menu", uri:"assets/raw/styles/slide_menu.bin"},
  ],
  string: [
    {name:"zh_CN", uri:"assets/raw/strings/zh_CN.bin"},
    {name:"en_US", uri:"assets/raw/strings/en_US.bin"},
  ],
  xml: [
    {name:"test", uri:"assets/raw/xml/test.xml"},
  ],
  data: [
    {name:"test", uri:"assets/raw/data/test.json"},
    {name:"com.zlg.app", uri:"assets/raw/data/com.zlg.app.json"},
    {name:"a-b-c", uri:"assets/raw/data/a-b-c.any"},
    {name:"test", uri:"assets/raw/data/test.dat"},
  ],
  script: [
    {name:"dummy", uri:"assets/raw/scripts/dummy.js"},
  ],
  font: [
    {name:"default", uri:"assets/raw/fonts/default.ttf"},
    {name:"ap", uri:"assets/raw/fonts/ap.ttf"},
    {name:"default_full", uri:"assets/raw/fonts/default_full.ttf"},
  ],
};
function pointerToString(pointer) {
  if(typeof pointer === 'string') {
    return pointer;
  } else if(getAsmModule() && getAsmModule().UTF8ToString) {
    return pointer && getAsmModule().UTF8ToString(pointer, 1024) || null;
  } else {
    return pointer;
  }
}
function TBrowser() { }

TBrowser.config = {
}

TBrowser.supportDirtyRect = function() {
  return false;
}

function TCanvas(name, w, h) {
  this.w = w;
  this.h = h;
  this.name = name;
  let ctx = wx.createCanvasContext(name);

  this.ctx = ctx;
  this.style = {width:w, height:h};
  this.ctx.beginFrame = function() {
    this.actions.length = 0; 
  }

  this.ctx.endFrame = function() {
    this.draw();
  }

  this.ctx.ellipse = function(x, y, rx, ry) {
    this.save();
    this.translate(x, y);
    this.scale(1, ry / rx);
    this.translate(-x, -y);
    this.beginPath();

    this.arc(
        /*xc =*/x,
        /*yc =*/y,
        /*radius =*/rx,
        /*angle1 =*/0,
        /*angle2 =*/2 * Math.PI);
   this.restore();
  }
}

TCanvas.prototype.getContext = function() {
  return this.ctx;
}

TBrowser.supportWebGL = function () {
  return false;
}

TBrowser.supportWebAssembly = function () {
  return false;
}

TBrowser.getDevicePixelRatio = function () {
  return TBrowser.ratio;
}

TBrowser.adjustCanvasToViewPort = function (canvas) {
  return true;
}

TBrowser.createCanvas = function (name, w, h) {
  var canvas = new TCanvas(name, w, h);

  return canvas;
}

TBrowser.createMainCanvas = function () {
  if (!TBrowser.mainCanvas) {
    TBrowser.mainCanvas = TBrowser.createCanvas("awtk-lcd", this.w, this.h);
  }

  return TBrowser.mainCanvas;
}

TBrowser.createFBO = function () {
  return TBrowser.createCanvas("awtk-lcd", this.w, this.h);
}


TBrowser.createAnimCanvas = function () {
  return TBrowser.createMainCanvas();;
}

TBrowser.activateCanvas = function (anim) {
  return true;
}

TBrowser.getActiveContext = function () {
  return TBrowser.mainCanvas.ctx;
}

TBrowser.createOfflineCanvas = function (name, w, h) {
  let canvas = wx.createOffscreenCanvas(w, h);
  canvas.name = name;
  
  return canvas;
}

TBrowser.createMutableImage = function (name, addr, w, h, line_length, format) {
  let canvas = wx.createOffscreenCanvas(name);

  return canvas;
}

TBrowser.getViewPort = function () {
  return {
    width: TBrowser.w,
    height: TBrowser.h
  };
}

TBrowser.updateDate = function () {
  TBrowser.date = new Date();
}

TBrowser.getFullYear = function () {
  return TBrowser.date.getFullYear();
}

TBrowser.getMonth = function () {
  return TBrowser.date.getMonth() + 1;
}

TBrowser.getDate = function () {
  return TBrowser.date.getDate();
}

TBrowser.getHours = function () {
  return TBrowser.date.getHours();
}

TBrowser.getMinutes = function () {
  return TBrowser.date.getMinutes();
}

TBrowser.getSeconds = function () {
  return TBrowser.date.getSeconds();
}

TBrowser.getDay = function () {
  return TBrowser.date.getDay();
}

TBrowser.getParam = function (name, defval) {
  let search = window.location.search;

  if (search) {
    let start = search.indexOf(name + '=');

    if (start >= 0) {
      start += name.length + 1;
      let str = search.substring(start);
      let end = str.indexOf('&');

      if (end >= 0) {
        str = str.substring(0, end);
      }

      return str;
    }
  }

  return defval;
}

TBrowser.init = function () {

  wx.getSystemInfo({
    success: function (res) {
      TBrowser.info = res;
      TBrowser.w = res.windowWidth;
      TBrowser.h = res.windowHeight;
      TBrowser.ratio = res.pixelRatio;
    }
  })

  return true;
}

TBrowser.loadAWTK = function () {
  //  TBrowser.loadScript('js/awtk.js');

  return true;
}

TBrowser.isMobile = function () {
  return true;
}

TBrowser.loadScript = function (url) {

  return true;
}

TBrowser.injectCSS = function (str) {

  return true;
}

TBrowser.loadFont = function (name, url) {
}

TBrowser.releaseFunction = function (funcID) {
  const RESERVED_FUNCTION_POINTERS = 1000;

  if (funcID > 0 && funcID < RESERVED_FUNCTION_POINTERS) {
    console.log('removeFunction:' + funcID);
    getAsmModule().removeFunction(funcID);
  } else {
    console.log('not js function:' + funcID);
  }

  return true;
}

function ImageCache() {

}

ImageCache.nextID = 100;
ImageCache.images = {};
ImageCache.invalidImageId = 0;

ImageCache.add = function (image) {
  let id = ImageCache.nextID++;
  let key = id.toString();

  ImageCache.images[key] = image;

  return id;
}

ImageCache.remove = function (id) {
  let key = id.toString();
  let image = ImageCache.images[key];

  delete ImageCache.images[key];

  return image;
}

ImageCache.get = function (id) {
  let key = id.toString();
  if (ImageCache.images.hasOwnProperty(key)) {
    return ImageCache.images[key];
  } else {
    return null;
  }
}

ImageCache.getIdOfName = function (name) {
  const images = ImageCache.images;

  for (const key in images) {
    const image = images[key];
    if (image.name === name) {
      return key;
    }
  }

  return ImageCache.invalidImageId;
}

function VGCanvas() {}

VGCanvas.getFBO = function () {
  if (VGCanvas.fbos.length < 1) {
    let canvas = VGCanvas.canvas;
    let fbo = TBrowser.createFBO();

    fbo.id = ImageCache.add(fbo);

    VGCanvas.fbos.push(fbo);
    console.log(`VGCanvas createFBO ${fbo.id}`);
  } else {
    console.log(`VGCanvas getFBO: ${VGCanvas.fbos.length}`);
  }

  return VGCanvas.fbos.pop();
}

VGCanvas.init = function () {
  const canvas = TBrowser.createMainCanvas();
  VGCanvas.fbos = [];
  VGCanvas.canvas = canvas;
  TBrowser.createAnimCanvas();
  TBrowser.activateCanvas(false);
  VGCanvas.ctx = TBrowser.getActiveContext();
  VGCanvas.width = parseInt(canvas.style.width);
  VGCanvas.height = parseInt(canvas.style.height);
  VGCanvas.ratio = TBrowser.getDevicePixelRatio();
  VGCanvas.states = [];

  console.log(`VGCanvas.init ${VGCanvas.width} x ${VGCanvas.height} `);

  return true;
}

VGCanvas.animateBegin = function () {
  TBrowser.activateCanvas(true);
  VGCanvas.ctx = TBrowser.getActiveContext();

  return true;
}

VGCanvas.animateEnd = function () {
  TBrowser.activateCanvas(false);
  VGCanvas.ctx = TBrowser.getActiveContext();

  return true;
}

VGCanvas.beginFrame = function () {
  if(VGCanvas.ctx.beginFrame) {
    VGCanvas.ctx.beginFrame();
  }

  VGCanvas.save();
//  VGCanvas.scale(VGCanvas.ratio, VGCanvas.ratio);
  
  return true;
}

VGCanvas.endFrame = function () {
  VGCanvas.restore();
  if(VGCanvas.ctx.endFrame) {
    VGCanvas.ctx.endFrame();
  }

  return true;
}

VGCanvas.createFBO = function () {
  let fbo = VGCanvas.getFBO();

  return parseInt(fbo.id);
}

VGCanvas.destroyFBO = function (id) {
  let fbo = ImageCache.get(id);

  VGCanvas.fbos.push(fbo);
  console.log(`VGCanvas.destroyFBO: ${VGCanvas.fbos.length}`);

  return true;
}

VGCanvas.bindFBO = function (id) {
  let fbo = ImageCache.get(id);

  VGCanvas.ctx = fbo.getContext('2d');
  VGCanvas.ctx.clearRect(0, 0, fbo.width, fbo.height);

  return true;
}

VGCanvas.unbindFBO = function (id) {
  let fbo = ImageCache.get(id);
  fbo.dirty = true;
  VGCanvas.ctx = TBrowser.getActiveContext();

  return true;
}

VGCanvas.getWidth = function () {
  return VGCanvas.width;
}

VGCanvas.getHeight = function () {
  return VGCanvas.height;
}

VGCanvas.getDevicePixelRatio = function () {
  return TBrowser.getDevicePixelRatio();
}

VGCanvas.save = function () {
  VGCanvas.ctx.save();
  var state = {
    globalAlpha : VGCanvas.globalAlpha,
    fillStyle : VGCanvas.fillStyle,
    strokeStyle : VGCanvas.strokeStyle,
    textAlign : VGCanvas.textAlign,
    textBaseline: VGCanvas.textBaseline,
    lineWidth : VGCanvas.lineWidth,
    miterLimit : VGCanvas.miterLimit,
    lineJoin : VGCanvas.lineJoin,
    lineCap : VGCanvas.lineCap,
    fontName : VGCanvas.fontName,
    fontSize : VGCanvas.fontSize,
  };

  return true;
}

VGCanvas.restore = function () {
  VGCanvas.ctx.restore();
  const state = VGCanvas.states.pop;

  VGCanvas.globalAlpha = state.globalAlpha;
  VGCanvas.fillStyle = state.fillStyle;
  VGCanvas.strokeStyle = state.strokeStyle;
  VGCanvas.textAlign = state.textAlign;
  VGCanvas.textBaseline= state.textBaseline;
  VGCanvas.lineWidth = state.lineWidth;
  VGCanvas.miterLimit = state.miterLimit;
  VGCanvas.lineJoin = state.lineJoin;
  VGCanvas.lineCap = state.lineCap;
  VGCanvas.fontName = state.fontName;
  VGCanvas.fontSize = state.fontSize;

  return true;
}

VGCanvas.setMitterLimit = function (value) {

  if(VGCanvas.miterLimit !== value) {
    VGCanvas.miterLimit = value;
    VGCanvas.ctx.miterLimit = value;
  }

  return true;
}

VGCanvas.setLineJoint = function (value) {
  if(VGCanvas.lineJoin !== value) {
    VGCanvas.lineJoin = value;
    VGCanvas.ctx.lineJoin = value;
  }

  return true;
}

VGCanvas.setLineCap = function (value) {
  if(VGCanvas.lineCap !== value) {
    VGCanvas.lineCap = value;
    VGCanvas.ctx.lineCap = value;
  }

  return true;
}

VGCanvas.setStrokeColor = function (value) {
  const svalue = pointerToString(value);

  if(VGCanvas.strokeStyle !== svalue) {
    VGCanvas.strokeStyle = svalue;
    VGCanvas.ctx.strokeStyle = svalue;
  }

  return true;
}

VGCanvas.setFillColor = function (value) {
  const svalue = pointerToString(value);

  if(VGCanvas.fillStyle !== svalue) {
    VGCanvas.fillStyle = svalue;
    VGCanvas.ctx.fillStyle = svalue;
  }

  return true;
}

VGCanvas.setGlobalAlpha = function (value) {
  if(VGCanvas.globalAlpha != value) {
    VGCanvas.globalAlpha = value;
    VGCanvas.ctx.globalAlpha = value;
  }

  return true;
}

VGCanvas.setLineWidth = function (value) {
  if(VGCanvas.lineWidth != value) {
    VGCanvas.lineWidth = value;
    VGCanvas.ctx.lineWidth = value;
  }

  return true;
}

VGCanvas.fill = function () {
  VGCanvas.ctx.fill();

  return true;
}

VGCanvas.stroke = function () {
  VGCanvas.ctx.stroke();

  return true;
}

VGCanvas.paint = function (stroke, id) {
  let ctx = VGCanvas.ctx;
  let image = ImageCache.get(id);

  if (stroke) {
    ctx.strokeStyle = ctx.createPattern(image, 'no-repeat');
    ctx.stroke();
  } else {
    ctx.fillStyle = ctx.createPattern(image, 'no-repeat');
    ctx.fill();
  }

  return true;
}

VGCanvas.beginPath = function () {
  VGCanvas.ctx.beginPath();

  return true;
}

VGCanvas.closePath = function () {
  VGCanvas.ctx.closePath();

  return true;
}

VGCanvas.moveTo = function (x, y) {
  VGCanvas.ctx.moveTo(x, y);

  return true;
}

VGCanvas.lineTo = function (x, y) {
  VGCanvas.ctx.lineTo(x, y);

  return true;
}

VGCanvas.quadTo = function (cpx, cpy, x, y) {
  VGCanvas.ctx.quadraticCurveTo(cpx, cpy, x, y);

  return true;
}

VGCanvas.bezierTo = function (cp1x, cp1y, cp2x, cp2y, x, y) {
  VGCanvas.ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);

  return true;
}

VGCanvas.arcTo = function (x1, y1, x2, y2, r) {
  VGCanvas.ctx.arcTo(x1, y1, x2, y2, r);

  return true;
}

VGCanvas.arc = function (x, y, r, start, end, ccw) {
  VGCanvas.ctx.arc(x, y, r, start, end, ccw);

  return true;
}

VGCanvas.rotate = function (rad) {
  VGCanvas.ctx.rotate(rad);

  return true;
}

VGCanvas.scale = function (x, y) {
  VGCanvas.ctx.scale(x, y);

  return true;
}

VGCanvas.translate = function (x, y) {
  if(x !== 0 || y !== 0) {
    VGCanvas.ctx.translate(x, y);
  }

  return true;
}

VGCanvas.isPointIntPath = function (x, y) {
  return VGCanvas.ctx.isPointInPath(x, y);
}

VGCanvas.transform = function (a, b, c, d, e, f) {
  VGCanvas.ctx.transform(a, b, c, d, e, f);

  return true;
}

VGCanvas.setTransform = function (a, b, c, d, e, f) {
  VGCanvas.ctx.setTransform(a, b, c, d, e, f);

  return true;
}

VGCanvas.ellipse = function (x, y, rx, ry) {
  VGCanvas.ctx.ellipse(x, y, rx, ry, 0, 0, Math.PI * 2);

  return true;
}

VGCanvas.roundRect = function (x, y, w, h, radius) {
  let ctx = VGCanvas.ctx;

  if (radius > 1) {
    var r = x + w;
    var b = y + h;
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(r - radius, y);
    ctx.quadraticCurveTo(r, y, r, y + radius);
    ctx.lineTo(r, y + h - radius);
    ctx.quadraticCurveTo(r, b, r - radius, b);
    ctx.lineTo(x + radius, b);
    ctx.quadraticCurveTo(x, b, x, b - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
  } else {
    ctx.rect(x, y, w, h);
  }

  return true;
}

VGCanvas.clipRect = function (x, y, w, h) {
  VGCanvas.ctx.rect(x, y, w, h);
  VGCanvas.ctx.clip();
  VGCanvas.ctx.beginPath();

  return true;
}

VGCanvas.setFont = function (name, size) {
  let fontName = pointerToString(name);
  let fontSize = Math.round(size || 18) + "px ";

  if (!(fontName) || fontName.indexOf('default') == 0) {
    fontName = TBrowser.config.defaultFont || 'sans';
  }

  if(VGCanvas.fontName !== fontName || VGCanvas.fontSize !== fontSize) {
    VGCanvas.fontName = fontName;
    VGCanvas.fontSize = fontSize;
    VGCanvas.ctx.font = fontSize + fontName; 
  }

  return true;
}

VGCanvas.setTextAlign = function (value) {
  const svalue = pointerToString(value);
  if(VGCanvas.textAlign !== svalue) {
    VGCanvas.textAlign = svalue;
    VGCanvas.ctx.textAlign = svalue;
  }

  return true;
}

VGCanvas.setTextBaseline = function (value) {
  const svalue = pointerToString(value);
  if(VGCanvas.textBaseline !== svalue) {
    VGCanvas.textBaseline = svalue;
    VGCanvas.ctx.textBaseline = svalue;
  }

  return true;
}

VGCanvas.fillText = function (text, x, y, max_width) {
  let str = pointerToString(text);
  VGCanvas.ctx.fillText(str, x, y, max_width);

  return true;
}

VGCanvas.measureText = function (text) {
  let str = pointerToString(text);

  let width = VGCanvas.ctx.measureText(str).width;

  return Math.round(width);
}

VGCanvas.drawImage = function (id, sx, sy, sw, sh, dx, dy, dw, dh) {
  let image = ImageCache.get(id);
  try {
    if (image && image.width && image.height && sw > 0 && sh > 0 && dw > 0 && dh > 0) {
      VGCanvas.ctx.drawImage(image.src, sx, sy, sw, sh, dx, dy, dw, dh);
    }
  } catch (e) {
    console.log(e);
    console.log(`${image.src} ${image.width} ${image.height} ${sx} ${sy} ${sw} ${sh}`);
  }

  return true;
}

VGCanvas.setFillLinearGradient = function (sx, sy, ex, ey, scolor, ecolor) {
  let startColor = pointerToString(scolor);
  let endColor = pointerToString(ecolor);
  let ctx = VGCanvas.ctx;

  grd = ctx.createLinearGradient(sx, sy, ex, ey);
  grd.addColorStop(0.000, startColor);
  grd.addColorStop(1.000, endColor);

  ctx.fillStyle = grd;

  return true;
}

VGCanvas.setStrokeLinearGradient = function (sx, sy, ex, ey, scolor, ecolor) {
  let startColor = pointerToString(scolor);
  let endColor = pointerToString(ecolor);
  let ctx = VGCanvas.ctx;

  grd = ctx.createLinearGradient(sx, sy, ex, ey);
  grd.addColorStop(0.000, startColor);
  grd.addColorStop(1.000, endColor);

  ctx.strokeStyle = grd;

  return true;
}

VGCanvas.setFillRadialGradient = function (cx, cy, ir, or, scolor, ecolor) {
  let startColor = pointerToString(scolor);
  let endColor = pointerToString(ecolor);
  let ctx = VGCanvas.ctx;

  grd = ctx.createRadialGradient(cx, cy, ir, cx, cy, or);
  grd.addColorStop(0.000, startColor);
  grd.addColorStop(1.000, endColor);

  ctx.fillStyle = grd;

  return true;
}

VGCanvas.setStrokeRadialGradient = function (cx, cy, ir, or, scolor, ecolor) {
  let startColor = pointerToString(scolor);
  let endColor = pointerToString(ecolor);
  let ctx = VGCanvas.ctx;

  grd = ctx.createRadialGradient(cx, cy, ir, cx, cy, or);
  grd.addColorStop(0.000, startColor);
  grd.addColorStop(1.000, endColor);

  ctx.strokeStyle = grd;

  return true;
}

VGCanvas.createMutableImage = function (addr, w, h, line_length, format) {
  const mutableImage = TBrowser.createMutableImage("mutableImage", addr, w, h, line_length, format);
  const id = ImageCache.add(mutableImage);

  mutableImage.id = "mutableImage" + id;

  console.log(`VGCanvas.createMutableImage:${addr}, ${w}, ${h}, ${line_length}, ${format}`);

  return id;
}

VGCanvas.updateMutableImage = function (id) {
  let mutableImage = ImageCache.get(id);

  let w = mutableImage.width;
  let h = mutableImage.height;
  let size = mutableImage.width * mutableImage.height;
  let start = mutableImage.addr >> 2;
  let end = start + size;
  let array = getAsmModule().HEAP32.subarray(start, end);
  let ctx = mutableImage.getContext('2d');
  let imageData = ctx.getImageData(0, 0, w, h);
  let data = new Int32Array(imageData.data.buffer);

  for (let i = 0; i < size; i++) {
    data[i] = array[i];
  }
  ctx.putImageData(imageData, 0, 0, 0, 0, w, h);

  //console.log(`VGCanvas.updateMutableImage ${id} ${start} ${size}`);

  return true;
}

VGCanvas.destroyMutableImage = function (id) {
  console.log(`VGCanvas.destroyMutableImage ${id}`);
  ImageCache.remove(id);

  return true;
}

if (typeof KeyEvent === "undefined") {
	var KeyEvent = {
		DOM_VK_CANCEL: 3,
		DOM_VK_HELP: 6,
		DOM_VK_BACK_SPACE: 8,
		DOM_VK_TAB: 9,
		DOM_VK_CLEAR: 12,
		DOM_VK_RETURN: 13,
		DOM_VK_ENTER: 14,
		DOM_VK_SHIFT: 16,
		DOM_VK_CONTROL: 17,
		DOM_VK_ALT: 18,
		DOM_VK_PAUSE: 19,
		DOM_VK_CAPS_LOCK: 20,
		DOM_VK_ESCAPE: 27,
		DOM_VK_SPACE: 32,
		DOM_VK_PAGE_UP: 33,
		DOM_VK_PAGE_DOWN: 34,
		DOM_VK_END: 35,
		DOM_VK_HOME: 36,
		DOM_VK_LEFT: 37,
		DOM_VK_UP: 38,
		DOM_VK_RIGHT: 39,
		DOM_VK_DOWN: 40,
		DOM_VK_PRINTSCREEN: 44,
		DOM_VK_INSERT: 45,
		DOM_VK_DELETE: 46,
		DOM_VK_0: 48,
		DOM_VK_1: 49,
		DOM_VK_2: 50,
		DOM_VK_3: 51,
		DOM_VK_4: 52,
		DOM_VK_5: 53,
		DOM_VK_6: 54,
		DOM_VK_7: 55,
		DOM_VK_8: 56,
		DOM_VK_9: 57,
		DOM_VK_SEMICOLON: 59,
		DOM_VK_EQUALS: 61,
		DOM_VK_A: 65,
		DOM_VK_B: 66,
		DOM_VK_C: 67,
		DOM_VK_D: 68,
		DOM_VK_E: 69,
		DOM_VK_F: 70,
		DOM_VK_G: 71,
		DOM_VK_H: 72,
		DOM_VK_I: 73,
		DOM_VK_J: 74,
		DOM_VK_K: 75,
		DOM_VK_L: 76,
		DOM_VK_M: 77,
		DOM_VK_N: 78,
		DOM_VK_O: 79,
		DOM_VK_P: 80,
		DOM_VK_Q: 81,
		DOM_VK_R: 82,
		DOM_VK_S: 83,
		DOM_VK_T: 84,
		DOM_VK_U: 85,
		DOM_VK_V: 86,
		DOM_VK_W: 87,
		DOM_VK_X: 88,
		DOM_VK_Y: 89,
		DOM_VK_Z: 90,
		DOM_VK_CONTEXT_MENU: 93,
		DOM_VK_NUMPAD0: 96,
		DOM_VK_NUMPAD1: 97,
		DOM_VK_NUMPAD2: 98,
		DOM_VK_NUMPAD3: 99,
		DOM_VK_NUMPAD4: 100,
		DOM_VK_NUMPAD5: 101,
		DOM_VK_NUMPAD6: 102,
		DOM_VK_NUMPAD7: 103,
		DOM_VK_NUMPAD8: 104,
		DOM_VK_NUMPAD9: 105,
		DOM_VK_MULTIPLY: 106,
		DOM_VK_ADD: 107,
		DOM_VK_SEPARATOR: 108,
		DOM_VK_SUBTRACT: 109,
		DOM_VK_DECIMAL: 110,
		DOM_VK_DIVIDE: 111,
		DOM_VK_BACK_BUTTON: 115,
		/*F4*/
		DOM_VK_MENU_BUTTON: 118,
		/*F7*/
		DOM_VK_SEARCH_BUTTON: 120,
		/*F9*/
		DOM_VK_F1: 112,
		DOM_VK_F2: 113,
		DOM_VK_F3: 114,
		DOM_VK_F4: 115,
		DOM_VK_F5: 116,
		DOM_VK_F6: 117,
		DOM_VK_F7: 118,
		DOM_VK_F8: 119,
		DOM_VK_F9: 120,
		DOM_VK_F10: 121,
		DOM_VK_F11: 122,
		DOM_VK_F12: 123,
		DOM_VK_F13: 124,
		DOM_VK_F14: 125,
		DOM_VK_F15: 126,
		DOM_VK_F16: 127,
		DOM_VK_F17: 128,
		DOM_VK_F18: 129,
		DOM_VK_F19: 130,
		DOM_VK_F20: 131,
		DOM_VK_F21: 132,
		DOM_VK_F22: 133,
		DOM_VK_F23: 134,
		DOM_VK_F24: 135,
		DOM_VK_NUM_LOCK: 144,
		DOM_VK_SCROLL_LOCK: 145,
		DOM_VK_COMMA: 188,
		DOM_VK_PERIOD: 190,
		DOM_VK_SLASH: 191,
		DOM_VK_BACK_QUOTE: 192,
		DOM_VK_OPEN_BRACKET: 219,
		DOM_VK_BACK_SLASH: 220,
		DOM_VK_CLOSE_BRACKET: 221,
		DOM_VK_QUOTE: 222,
		DOM_VK_META: 224,
    DOM_VK_BACK: 225
	};
}
function AssetsManager() {}

AssetsManager.exist = function (type, name) {
  const assets = g_awtk_assets[type];
  if (assets) {
    const asset = assets.find(iter => {
      return name == iter.name;
    });

    return !!asset;
  }

  return false;
}

AssetsManager.getImageByDPI = function (name, dpi) {
  let anydpi = '/xx/';
  const assets = g_awtk_assets['image'];
  if (assets) {
    const asset = assets.find(iter => {
      return name == iter.name && (iter.uri.indexOf(anydpi) >= 0 || iter.uri.indexOf(dpi) >= 0);;
    });

    return asset;
  }

  return null;
}

AssetsManager.getImage = function (name) {
  let dpi = '/x' + TBrowser.getDevicePixelRatio() + '/';
  let asset = AssetsManager.getImageByDPI(name, dpi);

  if(!asset) {
    asset = AssetsManager.getImageByDPI(name, '/x1/');
  }

  if(!asset) {
    console.log('Not found ' + name);
  }

  return asset;
}

AssetsManager.getImageURI = function (name) {
  const asset = AssetsManager.getImage(name);

  return asset ? asset.uri : null;
}

AssetsManager.getFontURI = function (name) {
  const assets = g_awtk_assets['font'];
  if (assets) {
    const asset = assets.find(iter => {
      return name == iter.name;
    });

    return asset ? asset.uri : null;
  }

  return null;
}

AssetsManager.preloadFonts = function () {
  const fonts = g_awtk_assets['font'];
  if(fonts && fonts.length > 0) {
    fonts.forEach(function(iter){
      if(iter.name.indexOf('default') != 0) {
        TBrowser.loadFont(iter.name, iter.uri);         
      }
    });
  }

  return true;
}


function ImageLoader() {}

function TImage() {
}

ImageLoader.getWidth = function (name) {
  let image = AssetsManager.getImage(name);

  return image ? image.w : 0;
}

ImageLoader.getHeight = function (name) {
  let image = AssetsManager.getImage(name);

  return image ? image.h : 0;
}

ImageLoader.load = function (name) {
  let id = ImageCache.getIdOfName(name);
  if (id !== ImageCache.invalidImageId) {
    return id;
  } else {
    let uri = "/" + AssetsManager.getImageURI(name);
    if (uri) {
      let image = new TImage();
      image.src = uri;
      image.name = name;

      wx.getImageInfo({
        src: uri,
        fail(res) {
          console.log(res);
        },
        success (res) {
          image.width = res.width;
          image.height = res.height;
          console.log(res.width)
          console.log(res.height)
        }
      })

      return ImageCache.add(image);
    }
  }
  return ImageCache.invalidImageId;
}

function testImageLoader() {
  let id = ImageLoader.load('me');
  let w = ImageLoader.getWidth('me');
  let h = ImageLoader.getHeight('me');

  console.log(`me: ${id} ${w} ${h}`);
  id = ImageLoader.load('me');
}

function Awtk() {

}

Awtk.init = function () {
  Awtk._init = getAsmModule().cwrap('awtk_web_init', 'number', []);
  Awtk._deinit = getAsmModule().cwrap('awtk_web_deinit', 'number', []);
  Awtk._mainLoopStep = getAsmModule().cwrap('awtk_web_main_loop_step', 'number', ['number']);
  Awtk._requestRepaint = getAsmModule().cwrap('awtk_web_request_repaint', 'number', ['number']);

  Awtk._onImCommit = getAsmModule().cwrap('awtk_web_on_im_commit', 'number', ['string', 'number']);
  Awtk._onKeyDown = getAsmModule().cwrap('awtk_web_on_key_down', 'number', ['number', 'number']);
  Awtk._onKeyUp = getAsmModule().cwrap('awtk_web_on_key_up', 'number', ['number', 'number']);
  Awtk._onWheel = getAsmModule().cwrap('awtk_web_on_wheel', 'number', ['number', 'number']);

  Awtk._onPointerDown = getAsmModule().cwrap('awtk_web_on_pointer_down', 'number',
    ['number', 'number', 'number']);
  Awtk._onPointerMove = getAsmModule().cwrap('awtk_web_on_pointer_move', 'number',
    ['number', 'number', 'number']);
  Awtk._onPointerUp = getAsmModule().cwrap('awtk_web_on_pointer_up', 'number',
    ['number', 'number', 'number']);

  AssetsManager.preloadFonts();

  return Awtk._init();
}

Awtk.deinit = function () {
  return Awtk._deinit();
}

Awtk.run = function () {
  return Awtk._run();
}

Awtk.mainLoopStep = function (timestamp) {
  return Awtk._mainLoopStep(timestamp);
}

Awtk.requestRepaint = function (reason) {
  return Awtk._requestRepaint(reason);
}

Awtk.mainLoopStep = function (timestamp) {
  return Awtk._mainLoopStep(timestamp);
}

Awtk.onKeyDown = function (key, timestamp) {
  return Awtk._onKeyDown(key, timestamp);
}

Awtk.onKeyUp = function (key, timestamp) {
  return Awtk._onKeyUp(key, timestamp);
}

Awtk.onImCommit = function (text, timestamp) {
  return Awtk._onImCommit(text, timestamp);
}

Awtk.onWheel = function (delta, timestamp) {
  return Awtk._onWheel(delta, timestamp);
}

Awtk.onPointerDown = function (x, y, timestamp) {
  return Awtk._onPointerDown(x, y, timestamp);
}

Awtk.onPointerMove = function (x, y, timestamp) {
  return Awtk._onPointerMove(x, y, timestamp);
}

Awtk.onPointerUp = function (x, y, timestamp) {
  return Awtk._onPointerUp(x, y, timestamp);
}


let MainLoopWeb = {
  eventQueue: []
};

function mainLoopPost(event) {
  MainLoopWeb.eventQueue.push(event);
}

function mainLoopDispatchEvents(timestamp) {
  while (MainLoopWeb.eventQueue.length) {
    let e = MainLoopWeb.eventQueue.pop();
    switch (e.type) {
      case 'keydown':
        {
          Awtk.onKeyDown(e.key, e.timeStamp);
          break;
        }
      case 'keyup':
        {
          Awtk.onKeyUp(e.key, e.timeStamp);
          break;
        }
      case 'im_commit':
        {
          Awtk.onImCommit(e.text, e.timeStamp);
          break;
        }
      case 'wheel':
        {
          Awtk.onWheel(e.delta, e.timeStamp);
          break;
        }
      case 'pointerdown':
        {
          Awtk.onPointerDown(e.x, e.y, e.timeStamp);
          break;
        }
      case 'pointermove':
        {
          Awtk.onPointerMove(e.x, e.y, e.timeStamp);
          break;
        }
      case 'pointerup':
        {
          Awtk.onPointerUp(e.x, e.y, e.timeStamp);
          break;
        }
      default:
        break;
    }
  }
}

function mainLoopStep(timestamp) {
  try {
    mainLoopDispatchEvents(timestamp);
  } catch(e) {
    console.log(e);
  }

  try {
    Awtk.mainLoopStep(10);
  } catch(e) {
    console.log(e);
  }
}

function mainLoopInit() {
}


module.exports = {
  Awtk: Awtk,
  mainLoopInit: mainLoopInit,
  mainLoopPost: mainLoopPost,
  mainLoopStep: mainLoopStep,
  VGCanvas : VGCanvas,
  TBrowser : TBrowser,
  ImageLoader : ImageLoader,
  pointerToString:pointerToString
}
