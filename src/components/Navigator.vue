<template>
    <header v-if="isPL" :class="{ 'scrolled-nav' : scrolledNav}">
        <nav>
            <div class="branding">
                <link rel="stylesheet"
                      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
                <img src="../assets/logo.png" alt="">
                <h1 class="site-name">SZPRX</h1>
            </div>
            <ul v-show="!mobile" class="navigation">
                <li>
                    <router-link class="link" :to="{name: 'Home'}">Strona główna</router-link>
                </li>
                <li>
                    <router-link class="link" :to="{name: 'ShopList'}">Lista zakupów</router-link>
                </li>
                <li>
                    <router-link class="link" :to="{name: 'ToBuy'}">Kupione</router-link>
                </li>
                <li>
                    <router-link class="link" :to="{name: 'Bought'}">Do kupienia</router-link>
                </li>
                <li @click="isPL = !isPL">
                    <i class="fa fa-language fa-2x"></i>
                </li>
            </ul>
            <div class="icon">
                <i @click="toggleMobileNav" v-show="mobile" class="far fa-bars"
                   :class="{'icon-active' : mobileNav}"></i>
            </div>
            <transition name="mobile-nav">
                <ul v-show="mobileNav" class="dropdown-nav">
                    <li>
                        <router-link @click="toggleMobileNav" class="link" :to="{name: 'Home'}">Strona główna</router-link>
                    </li>
                    <li>
                        <router-link @click="toggleMobileNav" class="link" :to="{name: 'ShopList'}">Lista zakupów</router-link>
                    </li>
                    <li>
                        <router-link @click="toggleMobileNav" class="link" :to="{name: 'ToBuy'}">Kupione</router-link>
                    </li>
                    <li>
                        <router-link @click="toggleMobileNav" class="link" :to="{name: 'Bought'}">Do kupienia</router-link>
                    </li>
                </ul>
            </transition>
        </nav>
    </header>
</template>

<script>
import Home from "../views/Home.vue";

export default {
    name: "Navigator",
    computed: {
        Home() {
            return Home
        }
    },
    data() {
        return {
            scrolledNav: null,
            mobile: true,
            mobileNav: null,
            windowWidth: null,
            active: false,
            isPL: true
        }
    },
    created() {
        window.addEventListener('resize', this.checkScreen);
        this.checkScreen();
    },
    mounted() {
        window.addEventListener('scroll', this.updateScroll)
    }
    , methods: {
        toggleMobileNav() {
            this.mobileNav = !this.mobileNav;
        },
        checkScreen() {
            this.windowWidth = window.innerWidth;
            if (this.windowWidth < 980) {
                this.mobile = true;
            } else {
                this.mobile = false;
                this.mobileNav = false;
            }

        },
        updateScroll() {
            const scrollPosition = window.scrollY;
            this.scrolledNav = scrollPosition > 50;
        }
    },
}
</script>

<style lang="scss" scoped>header {
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 99;
  width: 100%;
  position: fixed;
  transition: 0.5s ease all;
  color: #fff;

  nav {
    position: relative;
    display: flex;
    flex-direction: row;
    padding: 12px 0;
    transition: 0.5s ease all;
    width: 90%;
    margin: 0 auto;
    @media (min-width: 1140px) {
      max-width: 1140px;
    }

    ul,
    .link {
      font-weight: 500;
      color: #fff;
      list-style: none;
      text-decoration: none;
    }

    li {
      text-transform: uppercase;
      padding: 16px;
      margin-left: 16px;
    }

    .link {
      font-size: 14px;
      transition: 0.5s ease all;
      padding: 4px;
      border-bottom: 1px solid transparent;

      &:hover {
        color: #00afea;
        border-color: #00afea;
      }
    }

    .branding {
      display: flex;
      align-items: center;

      img {
        width: 50px;
        transition: 0.5s ease all;
      }

      .site-name {
        padding-left: 20px;
        font-weight: 600;
        color: #dddddd;
        white-space: nowrap;
        width: 180px;
      }
    }

    .navigation {
      display: flex;
      align-items: center;
      flex: 1;
      justify-content: flex-end;
        li{
            white-space: nowrap;
        }
    }

    .icon {
      display: flex;
      align-items: center;
      position: absolute;
      top: 0;
      right: 24px;
      height: 100%;

      i {
        cursor: pointer;
        font-size: 24px;
        transition: 0.5s ease all;
      }
    }

    .icon-active {
      transform: rotate(180deg);
    }

    .dropdown-nav {
      display: flex;
      flex-direction: column;
      position: fixed;
      width: 100%;
      max-width: 250px;
      height: 100%;
      background-color: #fff;
      top: 0;
      left: 0;

      li {
        margin-left: 0;

        .link {
          color: #000;
        }
      }
    }

    .mobile-nav-enter-active,
    .mobile-nav-leave-active {
      transition: 1s ease all;
    }

    .mobile-nav-enter-from,
    .mobile-nav-leave-to {
      transform: translateX(-250px);
    }

    .mobile-nav-enter-to {
      transform: translateX(0);
    }
  }
}

.scrolled-nav {
  background-color: #000;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
  0 2px 4px -1px rgba(0, 0, 0, 0.06);

  nav {
    padding: 8px 0;

    .branding {
      img {
        width: 40px;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
        0 2px 4px -1px rgba(0, 0, 0, 0.06);
      }
    }
  }
}


</style>