<template>
        <!-- 注册 start-->
        <div class="register-wrap">
            <div class="title">30秒快速注册，加入Z商城</div>
            <div class="container">
                <form>
                    <div class="register-module">
                        <div class="register-tab">
                            <div class="phone-number current">
                                <i class="iconfont icon-iconfontshouji"></i>注册
                            </div>
                            <div class="register-by-email ">
                            <!--  <i class="iconfont icon-youxiang"></i>
                                用邮箱注册 -->
                            </div>
                        </div>
                        <input type="hidden" value="1" name="register_type">
                        <div class="register-phone-number">
                            <div class="register-form">
                                <div class="label">
                                    <em class="xh">*</em>用户名：
                                </div>
                                <input name="register_phone_number" type="text" class="text" data-num="num" onblur="uname_check(this)">
                                <div class="wrong-tips" id="phone-tips">
                                    <i class="iconfont icon-close"></i>
                                    4-16位字母和数字的组合，不可用特殊字符
                                </div>
                                <div class="wrong-tips" id="uname-tips">
                                    <i class="iconfont icon-close"></i>
                                    用户名已被注册，请更换
                                </div>
                                <div class="tips">4-16位字母和数字的组合，不可用特殊字符</div>
                            </div>
                            <div class="register-form">
                                <div class="label">
                                    <em class="xh">*</em>验证码：
                                </div>
                                <div class="email-captcha">
                                    <input name="register_checkcode_phone" type="text" class="text" data-code="code" onblur="code_check()">
                                    <span class="captcha-img">
                                        <img width="98px" height="40px" src="data/code.php" alt="">
                                    </span>
                                    <a href="javascript:void(0)" class="captcha-change">换一张</a>
                                </div>
                                <div class="wrong-tips" id="code-tips">
                                    <i class="iconfont icon-close"></i>
                                        填写正确的验证码
                                </div>
                                <div class="tips">请填写图片验证码</div>
                            </div>
                            <!-- <div class="register-form">
                                <div class="label">
                                    <em class="xh">*</em>验证码：
                                </div>
                                <div class="sms-captcha">
                                    <input name="register_phone_code" type="text" class="text">
                                    <a class="get-captcha" href="javascript:void(0)">
                                        <span class="getcode in">获取短信验证码</span>
                                        <span class="loading">
                                            <em>10</em>秒后重新获取
                                        </span>
                                    </a>
                                    <div class="captcha-mask"></div>
                                </div>
                                <div class="wrong-tips">
                                    <i class="iconfont icon-close"></i>
                                        填写手机验证码
                                </div>
                                <div class="tips">请填写手机号码，然后点击[获取验证码]</div>
                            </div> -->
                            <div class="register-form">
                                <div class="label">
                                    <em class="xh">*</em>密码：
                                </div>
                                <input name="register_pasword_phone" type="password" class="text" onblur="upwd_check(this)" data-upwd="upwd">
                                <div class="wrong-tips" id="upwd-tips">
                                    <i class="iconfont icon-close"></i>
                                    6-16位字母和数字的组合，不可用特殊字符
                                </div>
                                <div class="tips">6-16位字母和数字的组合，不可用特殊字符</div>
                            </div>
                            <div class="register-form">
                                <div class="label">
                                    <em class="xh">*</em>确认密码：
                                </div>
                                <input name="register_reg_pasword_phone" type="password" class="text" data-cpwd="cpwd" onblur="cpwd_check(this)">
                                <div class="wrong-tips" id="cpwd-tips">
                                    <i class="iconfont icon-close"></i>
                                        请输入相同的密码
                                </div>
                                <div class="tips">再次输入密码</div>
                            </div>
                            <label class="agreement">
                                <input type="checkbox"  name="regRead_phone">
                                同意
                                <a href="javascript:void(0)" target="_blank">《商城用户协议》</a>
                                <a href="javascript:void(0)" target="_blank" class="xy_a">《隐私权说明》</a>
                            </label>
                            <input type="button" value="注册" class="register-btn" data-btn="phone-submit" onclick="register()">
                        </div>
                        <!-- <div class="register-email"  style="display:none;">
                            <div class="register-form">
                                <div class="label">
                                    <em class="xh">*</em>邮箱：
                                </div>
                                <div class="email">
                                    <input name="register_email" type="text" class="text">
                                    <ul class="account-list" style="display:none;">
                                    </ul>
                                </div>
                                <div class="wrong-tips">
                                    <i class="iconfont icon-close"></i>
                                        填写邮箱
                                </div>
                                <div class="tips">请填写邮箱</div>
                            </div>
                            <div class="register-form">
                                <div class="label">
                                    <em class="xh">*</em>密码：
                                </div>
                                <input name="register_pasword" type="password" class="text">
                                <div class="wrong-tips">
                                    <i class="iconfont icon-close"></i>
                                    6-16位字母和数字的组合，不可用特殊字符
                                </div>
                                <div class="tips">6-16位字母和数字的组合，不可用特殊字符</div>
                            </div>
                            <div class="register-form">
                                <div class="label">
                                    <em class="xh">*</em>确认密码：
                                </div>
                                <input name="register_reg_pasword" type="password" class="text" >
                                <div class="wrong-tips">
                                    <i class="iconfont icon-close"></i>
                                        填写手机验证码
                                </div>
                                <div class="tips">再次输入密码</div>
                            </div>
                            <div class="register-form">
                                <div class="label">
                                    <em class="xh">*</em>验证码：
                                </div>
                                <div class="email-captcha">
                                    <input name="register_checkcode" type="text" class="text">
                                    <input name="register_checkcode_token" type="hidden" value="1520316647758">
                                    <span class="captcha-img">
                                        <img width="100" height="40" src="data/code.php" alt="">
                                    </span>
                                    <a href="javascript:void(0)" class="captcha-change">换一张</a>
                                </div>
                                <div class="wrong-tips">
                                    <i class="iconfont icon-close"></i>
                                        填写手机验证码
                                </div>
                                <div class="tips">请填写验证码</div>
                            </div>
                            <label class="agreement">
                                <input type="checkbox" value="1" name="regRead" checked="">
                                同意
                                <a href="javascript:void(0)" target="_blank">《商城用户协议》</a>
                                <a href="javascript:void(0)" target="_blank" class="xy_a">《隐私权说明》</a>
                            </label>
                            <input name="register_email_submit" type="button" value="注册" class="register-btn">
                            <span style="display:none" class="register-btn submit-loading">正在注册...</span>
                        </div> -->
                    </div>
                </form>
                <div class="fast-login">
                    <p>
                        如果您已经注册，请 <a href="login.html">直接登录</a> 或者用以下方式登录：</p>
                    <div class="fast-login-list">
                        <a target="_blank" href="javascript:void(0)" class="weixin">
                            <i class="iconfont icon-weixin"></i>
                            微信登录
                        </a>
                        <a target="_blank" href="javascript:void(0)" class="sina">
                            <i class="iconfont icon-xinlang"></i>
                            新浪微博登录
                        </a>
                        <a target="_blank" href="javascript:void(0)" class="qq">
                            <i class="iconfont icon-qq"></i>
                            腾讯QQ登录
                        </a>
                        <a target="_blank" href="javascript:void(0)" class="alipay">
                            <i class="iconfont icon-iconfonticons"></i>
                            支付宝账号登录
                        </a>
                        <a target="_blank" href="javascript:void(0)" class="baidu">
                            <i class="iconfont icon-baidu"></i>
                            百度账号登录
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <!-- 注册 end -->
</template>
<script>
    export default{
        data(){
            return {htmlName:""}
        }
    }
</script>