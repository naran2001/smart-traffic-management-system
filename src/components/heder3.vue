<template>
  <div class="sidebar text-white" style="background-color: white;">
    <div class="logo text-center">
      <h1 class="logo-text" style="color:black;">Admin Panel</h1>
    </div>
    <nav class="nav flex-column nav-links">
      <router-link to="/adminDashboard" class="nav-link" style="color:black; font-weight:bold;text-align: center;" id="fontfamily">
        <b-icon icon="house-door" class="mr-2"></b-icon> Dashboard
      </router-link>
      <router-link to="/adminDashboard" style="color:black; font-weight:bold;text-align: center;" class="nav-link" id="fontfamily">
        <b-icon icon="house-door" class="mr-2"></b-icon> Logout
      </router-link>

       <div class="logo text-center" id="heder3text">
        <p class="logo-subtext"  id="heder3text" style="color:black"><b>All Rights Reserved by Thilina Narampanawa</b></p>
      </div>
    </nav>
  </div>
</template>

<script>
import Swal from 'sweetalert2';

export default {
  data() {
      return {
        parkingSlots: {}, 
      };
    },
  name: "Sidebar",
  methods: {
    getData() {
        this.getParkingSlots();
      },
    async showLogoutPopup() {
      const result = await Swal.fire({
        title: 'Are you sure?',
        text: 'You want to log out?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Yes, logout',
        cancelButtonText: 'No, cancel',
      });

      if (result.isConfirmed) {
        await this.$router.push('/adminlogin');
        Swal.fire('Logged out!', 'You have been logged out.', 'success');
      }
    },
    getParkingSlots() {
        axios
        .get('https://smart-traffic-managemanet-default-rtdb.firebaseio.com/Power.json')
          .then((response) => {
            this.parkingSlots = response.data;
          })
          .catch((error) => {
            console.error('Error fetching parking slots data:', error);
          });
      },
  },
};
</script>

<style scoped>
.logo-text {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 0;
  margin-top: 70px;
}

.logo-subtext {
  font-size: 14px;
  margin-top: 0;
}

.nav-link {
  color: #fff;
  font-family: 'New Time Nevran', sans-serif;
  padding: 10px 20px;
  text-decoration: none;
  transition: background-color 0.3s;
}

.nav-link:hover {
  background-color: #555;
}

.sidebar {
  width: 250px;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  overflow-y: auto;
}

.nav-links {
  padding: 20px 0;
}

#heder3text {
  text-align: center !important;
  margin-top: 250px;
}

#heder3text[data-v-2e2cc125] {
    text-align: center !important;
    margin-top: 240px;
}
</style>
