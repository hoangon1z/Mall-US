<template>
    <div data-v-50ea9a25="" class="login__container-form">
    <div data-v-50ea9a25="" class="tab-content activecontent">
        <div data-v-b677e826="" data-v-50ea9a25="" class="signIn__container">
            <div data-v-5f6a9e3a="" data-v-b677e826="" class="phoneInput__container">
                <div data-v-5f6a9e3a="" class="phoneInput__container-label"><img data-v-5f6a9e3a="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAM1BMVEUAAABIgP9Hf/9HgP9If/9If/9Hf/9GgP9Hf/9Kgf9GgP9Hgf9Kf/9Qhv9HgP9HgP9Hgf8yzScUAAAAEHRSTlMAmXO/YEBOf1Yej98wE6+P35gKawAAAHZJREFUSMft0EsOgCAMRdECyh91/6t1RDSN8OpITLjDpmfyaOiC1418oYes6mTRPxZFgQIDHgHPgEZATzDBBH8Cr7MLaGXAHCDzKTB1mU0G1HVVInBbXItAWms2jbKSCOwIRAYyAoFYrv/viLDg/7wQTaOYaeRObJUeiXwXMZUAAAAASUVORK5CYII=" class="phoneInput__container-label__icon"><span data-v-5f6a9e3a="">Username or number phone</span>
                </div>
                <div data-v-5f6a9e3a="" class="phoneInput__container-input">
                    <input data-v-5f6a9e3a="" v-model="username" type="text" name="userNumber" placeholder="Please enter username or number phone">

                </div>
            </div>
            <div data-v-2c10910c="" data-v-b677e826="" class="passwordInput__container">
                <div data-v-2c10910c="" class="passwordInput__container-label"><img data-v-2c10910c="" class="passwordInput__container-label__icon" data-origin="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAARVBMVEUAAABIgP9Gf/9GgP9Hgf9HgP9HgP9Hgf9Hgf9If/9Gf/9JgP9Hf/9Hgf9Hgf9Hgf9HgP9Ggf9Ggf9Hf/9McP9HgP9Hgf8A23ijAAAAFnRSTlMAmSGDj3FB7985TBMQr6G/X89pVgq/Au04/QAAAS5JREFUSMfdlNkWgyAMRFkSkIK4lv//1CLt0cpWeO28iblMchgg/ym2rRwopRw31lAugH6JK1KXxlAHnCOHN6Kr9dyXoNKfL4UHsVeA2f9nt3n8Dmtl3LQDDZSymkEypKhZAOXJ2g4U9nJHa8a23JOiVGQO5uoz1sPvld3m0QWwMrD1AnM3YK1giZTNAwIW6QqSixWx7+R+aLhnbHCuixhdg6YvA9ekaw7eBlzJTCaWgGiTucYTWKI/YLLGwwnI1DpHyBO4rz+PY0RUaa8FQBwx9No81wQYomnQTkwTcAQ0iBHS6LC/Ad3oIMLdC7dgLgBpZtQ6H1kb8kD/OcQhsCHJBqLlpZLuicMky1lC1yQ8AdMGsM4bZ8kl03unCbO/6kcTPzQ4lh4mOYzIyB/pBbdnSf64MvFTAAAAAElFTkSuQmCC" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAARVBMVEUAAABIgP9Gf/9GgP9Hgf9HgP9HgP9Hgf9Hgf9If/9Gf/9JgP9Hf/9Hgf9Hgf9Hgf9HgP9Ggf9Ggf9Hf/9McP9HgP9Hgf8A23ijAAAAFnRSTlMAmSGDj3FB7985TBMQr6G/X89pVgq/Au04/QAAAS5JREFUSMfdlNkWgyAMRFkSkIK4lv//1CLt0cpWeO28iblMchgg/ym2rRwopRw31lAugH6JK1KXxlAHnCOHN6Kr9dyXoNKfL4UHsVeA2f9nt3n8Dmtl3LQDDZSymkEypKhZAOXJ2g4U9nJHa8a23JOiVGQO5uoz1sPvld3m0QWwMrD1AnM3YK1giZTNAwIW6QqSixWx7+R+aLhnbHCuixhdg6YvA9ekaw7eBlzJTCaWgGiTucYTWKI/YLLGwwnI1DpHyBO4rz+PY0RUaa8FQBwx9No81wQYomnQTkwTcAQ0iBHS6LC/Ad3oIMLdC7dgLgBpZtQ6H1kb8kD/OcQhsCHJBqLlpZLuicMky1lC1yQ8AdMGsM4bZ8kl03unCbO/6kcTPzQ4lh4mOYzIyB/pBbdnSf64MvFTAAAAAElFTkSuQmCC"><span data-v-2c10910c="">Password</span>
                </div>
                <div data-v-2c10910c="" class="passwordInput__container-input">
                    <input data-v-2c10910c="" v-model="password" type="password" placeholder="Please enter password" maxlength="32" autocomplete="new-password"><img data-v-2c10910c="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAP1BMVEUAAADExMTExMTDw8PExMTFxcXFxcXExMS/v7/FxcXFxcXExMTExMTDw8PExMTFxcXFxcXExMTPz8+/v7/ExMTkagEbAAAAFHRSTlMAIO/ff29fvxDfMD/PoI+fr1AQMBwdwB4AAAFQSURBVDjL5ZJbkoQgDEXDI4iAqN3sf61DIEFHqmvmv/OhEE5ycwvgm0Il+z9uLQU/HJ0OrTvD4IqdoZdbdOHQh+sczphlSmKlvZu4uPZG2bkqfnDRzFlKL/FKuM9cig+/OoLCmcs8Au7ZqUDcG4IW00OGE2Fh040D/G1baeFO8mDo07gmpdUAa5djVGQPgej3OFtuwqZX7U3o1C0RmjevL+/rWLZqVzqnyV0bc70atgVJInPUaR/ip5TkATrmIBYBd3Gq6pGSVWpc18mPY9jYGKk0jgeP0nCjPxtDTgpnZXDkjGy0kgv3AK+4FG6opMmQXJVwob8wK0/jgCu8qWS+c/oU7hJumUqyrl2MOdDLzd85maVs/p6iQScOMnG1HcYXANlBwsriH9zWua2NZ4zmR8l+Jy6Ycotk/czJfQU8kqmRdgwwhU9y7X+F3yx8VfwAZv4b1F/KTEQAAAAASUVORK5CYII=" class="eye">
                </div>
            </div>
            <div data-v-b677e826="" class="signIn__container-button">
                <button data-v-b677e826="" class="active" @click="login">Sign In</button>
                <button data-v-b677e826="" class="register" @click="$router.push('/register')">Sign Up</button>
            </div>
            <div data-v-b677e826="" class="signIn_footer">
                <div data-v-b677e826="" class="customcon">
                    <div data-v-b677e826="" class="custombg"></div>
                    <div data-v-b677e826="" class="font24">Custome Service</div>
                </div>
            </div>
            <div data-v-9789bdf6="" data-v-b677e826="" class="diaSign Inactive" style="display:none;">
                <div data-v-9789bdf6="" class="dialog__container" role="dialog" tabindex="0">
                    <div data-v-9789bdf6="" class="dialog__container-img"><img data-v-9789bdf6="" alt="" class="" data-origin="https://82vn.com/assets/png/warning-d5bee9c1.png" src="https://82vn.com/assets/png/warning-d5bee9c1.png">
                    </div>
                    <div data-v-9789bdf6="" class="dialog__container-title">
                        <h1 data-v-9789bdf6="">Tài khoản đã bị khóa</h1>
                    </div>
                    <div data-v-9789bdf6="" class="dialog__container-content">
                        <div data-v-b677e826="" class="idlockTip">Bạn đã nhập sai liên tiếp 10 lần
                            <br data-v-b677e826="">Liên hệ Custome Service để mở khóa</div>
                    </div>
                    <div data-v-9789bdf6="" class="dialog__container-footer">
                        <button data-v-b677e826="" class="dialogBtn">Hủy bỏ</button>
                        <button data-v-b677e826="" class="dialogBtn"><img data-v-b677e826="" src="https://82vn.com/assets/png/iconservr-4e8415ae.png"> Liên hệ Custome Service</button>
                    </div>
                    <!---->
                </div>
                <div data-v-9789bdf6="" class="dialog__outside"></div>
            </div>
            <div data-v-60f363cc="" data-v-b677e826="" class="popups">
                <!---->
                <!---->
            </div>
        </div>
    </div>
    <div data-v-50ea9a25="" class="tab-content">
        <div data-v-c0d4b9dc="" data-v-50ea9a25="" class="signIn__container">
            <div data-v-9ea79214="" data-v-c0d4b9dc="" class="emailcontainer">
                <div data-v-9ea79214="" class="emailinput__container">
                    <div data-v-9ea79214="" class="emailinput__container-label"><img data-v-9ea79214="" src="https://82vn.com/assets/png/emailnumber-9c1a6800.png" class="emailinput__container-label__icon"><span data-v-9ea79214="">Email/ số tài khoản Sign In</span>
                    </div>
                    <div data-v-9ea79214="" class="emailinput__container-input">
                        <input data-v-9ea79214="" type="text" name="userEmail" maxlength="250" placeholder="Vui lòng nhập email của bạn">
                    </div>
                </div>
            </div>
            <div data-v-2c10910c="" data-v-c0d4b9dc="" class="passwordInput__container">
                <div data-v-2c10910c="" class="passwordInput__container-label"><img data-v-2c10910c="" class="passwordInput__container-label__icon ar-lazyload" data-origin="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAARVBMVEUAAABIgP9Gf/9GgP9Hgf9HgP9HgP9Hgf9Hgf9If/9Gf/9JgP9Hf/9Hgf9Hgf9Hgf9HgP9Ggf9Ggf9Hf/9McP9HgP9Hgf8A23ijAAAAFnRSTlMAmSGDj3FB7985TBMQr6G/X89pVgq/Au04/QAAAS5JREFUSMfdlNkWgyAMRFkSkIK4lv//1CLt0cpWeO28iblMchgg/ym2rRwopRw31lAugH6JK1KXxlAHnCOHN6Kr9dyXoNKfL4UHsVeA2f9nt3n8Dmtl3LQDDZSymkEypKhZAOXJ2g4U9nJHa8a23JOiVGQO5uoz1sPvld3m0QWwMrD1AnM3YK1giZTNAwIW6QqSixWx7+R+aLhnbHCuixhdg6YvA9ekaw7eBlzJTCaWgGiTucYTWKI/YLLGwwnI1DpHyBO4rz+PY0RUaa8FQBwx9No81wQYomnQTkwTcAQ0iBHS6LC/Ad3oIMLdC7dgLgBpZtQ6H1kb8kD/OcQhsCHJBqLlpZLuicMky1lC1yQ8AdMGsM4bZ8kl03unCbO/6kcTPzQ4lh4mOYzIyB/pBbdnSf64MvFTAAAAAElFTkSuQmCC"><span data-v-2c10910c="">Mật khẩu</span>
                </div>
                <div data-v-2c10910c="" class="passwordInput__container-input">
                    <input data-v-2c10910c="" type="password" placeholder="Vui lòng nhậpMật khẩu" maxlength="32" autocomplete="new-password"><img data-v-2c10910c="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAP1BMVEUAAADExMTExMTDw8PExMTFxcXFxcXExMS/v7/FxcXFxcXExMTExMTDw8PExMTFxcXFxcXExMTPz8+/v7/ExMTkagEbAAAAFHRSTlMAIO/ff29fvxDfMD/PoI+fr1AQMBwdwB4AAAFQSURBVDjL5ZJbkoQgDEXDI4iAqN3sf61DIEFHqmvmv/OhEE5ycwvgm0Il+z9uLQU/HJ0OrTvD4IqdoZdbdOHQh+sczphlSmKlvZu4uPZG2bkqfnDRzFlKL/FKuM9cig+/OoLCmcs8Au7ZqUDcG4IW00OGE2Fh040D/G1baeFO8mDo07gmpdUAa5djVGQPgej3OFtuwqZX7U3o1C0RmjevL+/rWLZqVzqnyV0bc70atgVJInPUaR/ip5TkATrmIBYBd3Gq6pGSVWpc18mPY9jYGKk0jgeP0nCjPxtDTgpnZXDkjGy0kgv3AK+4FG6opMmQXJVwob8wK0/jgCu8qWS+c/oU7hJumUqyrl2MOdDLzd85maVs/p6iQScOMnG1HcYXANlBwsriH9zWua2NZ4zmR8l+Jy6Ycotk/czJfQU8kqmRdgwwhU9y7X+F3yx8VfwAZv4b1F/KTEQAAAAASUVORK5CYII=" class="eye">
                </div>
            </div>
            <div data-v-c0d4b9dc="">
                <div data-v-c0d4b9dc="" role="checkbox" class="van-checkbox" tabindex="0" aria-checked="false">
                    <div class="van-checkbox__icon van-checkbox__icon--round"><i class="van-badge__wrapper van-icon van-icon-success"><!----><!----><!----></i>
                    </div><span class="van-checkbox__label">Nhớ mật khẩu</span>
                </div>
            </div>
            <div data-v-c0d4b9dc="" class="signIn__container-button">
                <button data-v-c0d4b9dc="" class="" @click="login">Sign In</button>
                <button data-v-c0d4b9dc="" class="register">Sign Up</button>
            </div>
            <div data-v-c0d4b9dc="" class="signIn_footer">
                <div data-v-c0d4b9dc="" class="forgetcon">
                    <div data-v-c0d4b9dc="" class="forgetbg"></div>
                    <div data-v-c0d4b9dc="" class="font24">Forgot Password</div>
                </div>
                <div data-v-c0d4b9dc="" class="customcon">
                    <div data-v-c0d4b9dc="" class="custombg"></div>
                    <div data-v-c0d4b9dc="" class="font24">Custome Service</div>
                </div>
            </div>
            <div data-v-9789bdf6="" data-v-c0d4b9dc="" class="diaSign Inactive">
                <div data-v-9789bdf6="" class="dialog__container" role="dialog" tabindex="0">
                    <div data-v-9789bdf6="" class="dialog__container-img"><img data-v-9789bdf6="" alt="" class="ar-lazyload" data-origin="https://82vn.com/assets/png/warning-d5bee9c1.png">
                    </div>
                    <div data-v-9789bdf6="" class="dialog__container-title">
                        <h1 data-v-9789bdf6="">Tài khoản đã bị khóa</h1>
                    </div>
                    <div data-v-9789bdf6="" class="dialog__container-content">
                        <div data-v-c0d4b9dc="" class="idlockTip">Bạn đã nhập sai liên tiếp 10 lần
                            <br data-v-c0d4b9dc="">Liên hệ Custome Service để mở khóa</div>
                    </div>
                    <div data-v-9789bdf6="" class="dialog__container-footer">
                        <button data-v-c0d4b9dc="" class="dialogBtn">Hủy bỏ</button>
                        <button data-v-c0d4b9dc="" class="dialogBtn"><img data-v-c0d4b9dc="" src="https://82vn.com/assets/png/iconservr-4e8415ae.png"> Liên hệ Custome Service</button>
                    </div>
                    <!---->
                </div>
                <div data-v-9789bdf6="" class="dialog__outside"></div>
            </div>
            <div data-v-60f363cc="" data-v-c0d4b9dc="" class="popups">
                <!---->
                <!---->
            </div>
        </div>
    </div>
</div>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      password: '',
      rememberMe: false,
      error: null,
    };
  },
  methods: {
    async login() {
      if (!this.username || !this.password) {
        // Show the dialog with the message
        this.showErrorToast("Please enter complete information");
        return;
      }
      try {
        const response = await axios.post('/api/webapi/login', {
          username: this.username,
          pwd: this.password,
        });

        if (response.data.user && response.data.user.data && response.data.user.data.success) {
          this.$store.commit('login', response.data.user.data);
          if (this.rememberMe) {
            this.setCookie('token', response.data.user.data.data.Sign, 1);
            this.setCookie('auth', response.data.user.data.data.value, 1);
          }
          this.$router.push('/home');
        } else {
          this.error = response.data.user.data.message;
        }
      } catch (error) {
        this.error = 'An error occurred. Please try again later.';
      }
    },
    showErrorToast(message) {
      const toast = document.querySelector('.van-toast');
      if (toast) {
        toast.style.display = 'block';
        document.querySelector('.van-toast__text').textContent = message;
        setTimeout(() => {
          toast.style.display = 'none';
        }, 3000); // Hide after 3 seconds
      }
    },
  },
};
</script>