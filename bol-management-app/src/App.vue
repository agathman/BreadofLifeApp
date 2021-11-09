<template>
<div>
  <!-- Non-functional Nav Bar -->
  <nav class="navbar navbar-expand navbar-light bg-light">
      <div class="container">
      <a class="navbar-brand" href="/">Event Management App</a>
        <div class="collapse navbar-collapse" >
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/createClient"
                >Create Client</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/createEvent"
                >Create Event</router-link
              >
            </li>
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
        </div>
      </div>
    </nav>

    <!-- Router view -->
    <div class="container mt-5">
      <router-view></router-view>
    </div>
  </div>
</template>