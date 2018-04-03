<template>
        <div class="wrapper">
            <form id="loginForm" action="javascript:void(0)">
                <div class="login-wrap">
                    <div class="ad-div">
                        <div>
                            <a href="index.html" target="_blank">
                                <img width="520" height="350" src="../assets/images/login/ad2_1.jpg" alt="">
                            </a>
                        </div>
                    </div>
                    <div class="login-layer">
                        <div class="login-head">
                            <h3 class="curLogin" id="login-user">登录Z商城</h3>
                            <h3 id="login-seller"><!--商家登录--></h3>
                        </div> 
                        <div class="login-select" data-id="login-user">
                            <div class="login-content user-content">
                                <div class="login-wrong-tips">
                                    验证码有误，请重输
                                </div>
                                <div class="form-item uname">
                                    <input type="text" placeholder="手机号/邮箱/用户名" class="text" data-id="user-u" name="uname">
                                </div> 
                                <div class="form-item upwd"> 
                                    <input type="password" placeholder="密码" class="text" data-id="user-p" name="upwd">
                                </div> 
                                <div class="form-item captcha-item"> 
                                    <input type="text" placeholder="图片验证码" class="text" name="picCode" data-id="user-c" onblur="code_check()">
                                    <img width="100px" height="40px" src="data/code.php" alt="图片验证码" class="rt code_pic" title="看不清，点击刷新"> 
                                </div> 
                                <div class="form-other"> 
                                    <a target="_blank" href="javascript:void(0)" class="forget-password rt">忘记密码？</a>
                                </div>
                                <input type="button" value="登 录" class="login-layer-btn" data-id="user-btn">
                            </div> 
                            <div class="collaborate clear"> 
                                <div class="xian lf"></div> 
                                <p class="lf">合作账号登录</p> 
                                <div class="xian lf"></div> 
                            </div> 
                            <div class="login-foot"> 
                                <a target="_blank" class="weixin" href="javascript:void(0)">
                                    <i class="iconfont icon-weixin"></i>
                                </a> 
                                <a target="_blank" class="sina" href="javascript:void(0)">
                                    <i class="iconfont icon-xinlang"></i>
                                </a> 
                                <a target="_blank" class="qq" href="javascript:void(0)">
                                    <i class="iconfont icon-qq"></i>
                                </a> 
                                <a target="_blank" class="alipay" href="javascript:void(0)">
                                    <i class="iconfont icon-iconfonticons"></i>
                                </a> 
                                <a target="_blank" class="baidu" href="javascript:void(0)">
                                    <i class="iconfont icon-baidu"></i>
                                </a> 
                            </div> 
                        </div>
                    </div> 
                </div>
            </form> 
        </div>
</template>
<script>
    
</script>