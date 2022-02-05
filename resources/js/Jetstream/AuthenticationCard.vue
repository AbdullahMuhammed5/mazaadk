<template>
  <div class="container mt-5">
      <div class="row justify-content-center align-items-center">
          <div class="col-8">
              <div>
                  <slot name="logo" />
              </div>
              <div class="card shadow-sm px-3">
                  <slot />
              </div>
          </div>
      </div>
  </div>
</template>
