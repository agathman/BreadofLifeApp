<template>
<div>
  <!-- functional Nav Bar -->
  <nav class="navbar navbar-expand navbar-light bg-light">
      <div class="container">
      <a class="navbar-brand" href="/">Event Management App</a>
        <div class="collapse navbar-collapse" >
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/signUp">
              Sign Up for Distribution
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/createEvent"
                >Create Event</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/chartjs">
                View Chart</router-link>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Views
              </a>
              <ul
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li class="nav-item">
              <router-link class="nav-link" to="/viewClients"
                >View Clients</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/viewEvents"
                >View Events</router-link
              >
            </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Lookups
              </a>
              <ul
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
            <li class="nav-item">
              <router-link class="nav-link" to="/viewClientEvent"
                >Clients at Event</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/distHistory"
                >Distribution History for Client</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/distZip"
                >Distribution By Zip Code</router-link
              >
            </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Router view -->
    <div class="container mt-5">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

</script>

<style>
@import '~bootstrap/dist/css/bootstrap.css';

</style>