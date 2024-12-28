<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">

        <!-- Bootstrap Css -->
        <link id="bootstrap-style" type="text/css" href="https://themesbrand.com/minible/layouts/assets/css/bootstrap.min.css" rel="stylesheet" />
        <!-- Icons Css -->
        <link type="text/css" href="https://themesbrand.com/minible/layouts/assets/css/icons.min.css" rel="stylesheet" />
        <!-- App Css-->
        <link id="app-style" type="text/css" href="https://themesbrand.com/minible/layouts/assets/css/app.min.css" rel="stylesheet" />

        @viteReactRefresh
        @vite('resources/js/app.jsx')
        @inertiaHead
        @routes
    </head>

    <body>
        @inertia
        <div id="app"></div>

        <!-- JAVASCRIPT -->
        <script src="https://themesbrand.com/minible/layouts/assets/libs/jquery/jquery.min.js"></script>
        <script src="https://themesbrand.com/minible/layouts/assets/libs/metismenu/metisMenu.min.js"></script>
        <script src="https://themesbrand.com/minible/layouts/assets/libs/simplebar/simplebar.min.js"></script>
        <script src="https://themesbrand.com/minible/layouts/assets/libs/node-waves/waves.min.js"></script>
        <script src="https://themesbrand.com/minible/layouts/assets/libs/waypoints/lib/jquery.waypoints.min.js"></script>
        <script src="https://themesbrand.com/minible/layouts/assets/libs/jquery.counterup/jquery.counterup.min.js"></script>

    </body>

</html>
