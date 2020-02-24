<template>
  <v-app class="background">
    <v-container fill-height fluid>
      <v-layout align-center>
        <v-flex xs12 sm12 md8 offset-md2 class="text-xs-center">
          <v-card id="item" v-for="item in items" @click.native.stop="openItem = !openItem, openedItem = item" :key="item.name" ripple hover width="250" class="d-inline-block ma-3" style="border-radius:2em">
            <v-card-title><h1 class="mx-auto dancing grey--text display-2">{{ item.name }}</h1></v-card-title>
            <v-card-media height="180" id="itemImage"><img :src="item.images[0].src" alt="item-image"/></v-card-media>
            <v-card-text class="mx-auto">{{ item.description }}</v-card-text>
            <v-card-actions class="pb-3 px-3"><v-spacer></v-spacer><p class="mx-2 pink--text">$ {{ item.cost }}</p><v-btn icon color="accent" @click="openItem = !openItem, openedItem = item"><v-icon>add_shopping_cart</v-icon></v-btn></v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

    <v-dialog v-model="openItem" fullscreen content-class="background" style="border-radius:3em;">
      <v-container class="ma-0 pa-2" align-content-center fluid>
        <v-flex xs12 class="text-xs-center">

          <v-card-title class="pa-0">
            <h1 class="accent--text ml-3 dancing display-2">{{ openedItem.name }}</h1>
            <v-spacer></v-spacer>
            <v-btn @click="openItem = !openItem" fab color="accent"><v-icon>close</v-icon></v-btn>
          </v-card-title>

          <v-layout row wrap class="mt-3">
            <v-flex xs12 sm12 md7 class="px-2 mb-4">
              <v-carousel class="rounded">
                <v-carousel-item v-for="image in openedItem.images" :src="image.src" :key="image.src"></v-carousel-item>
              </v-carousel>
            </v-flex>
            <v-divider></v-divider>
            <v-flex xs12 sm12 md5>
              <v-btn round class="accent my-3">Sign In</v-btn>
              <v-btn round class="accent my-3">Sign Up</v-btn>
              <v-divider></v-divider>
              <v-card-text>
              <v-text-field
                ref="name"
                prepend-icon="account_circle"
                v-model="name"
                :rules="[() => !!name || 'This field is required']"
                :error-messages="errorMessages"
                label="Full Name"
                placeholder="First Last"
                required
              ></v-text-field>
              <v-text-field
                prepend-icon="place"
                ref="address"
                :rules="[
                  () => !!address || 'This field is required',
                  () => !!address && address.length <= 25 || 'Address must be less than 25 characters',
                  addressCheck
                ]"
                v-model="address"
                label="Address Line"
                placeholder="Example LN, 123"
                counter="25"
                required
              ></v-text-field>
              <v-text-field
                prepend-icon="mail"
                ref="zip"
                :rules="[() => !!zip || 'This field is required']"
                v-model="zip"
                label="ZIP / Postal Code"
                required
                placeholder="123456"
              ></v-text-field>
              <v-select
                prepend-icon="location_city"
                ref="state"
                :rules="[() => !!state || 'This field is required']"
                :items="states"
                v-model="state"
                autocomplete
                label="State/Province/Region"
                placeholder="MD"
                required
              ></v-select>
              <v-text-field
              prepend-icon="credit_card"
              mask="credit-card"
              label="Card Number"
              placeholder="1111-2222-3333-4444"
              ></v-text-field>
              </v-card-text>

              <v-divider></v-divider>

            </v-flex>
          </v-layout>

          <p class="red--text display-1 dancing">Size: M, Cost: ${{ openedItem.cost }}</p>

          <v-btn round class="accent"><v-icon left>remove_shopping_cart</v-icon>Remove</v-btn>
          <v-btn round class="accent"><v-icon left>local_shipping</v-icon>buy</v-btn>

        </v-flex>
      </v-container>
    </v-dialog>

    <v-flex md2 class="white hidden-sm-and-down ml-4 pa-3 elevation-11 rounded text-xs-center" style="position:fixed;top:8em;left:0;">
      <h1 class="grey--text pa-2"> Filter Apparel </h1>
      <v-divider></v-divider>
      <v-card-actions>
        <v-container fluid px-0>
        <v-checkbox
             :label="`Checkbox 1: ${checkbox.toString()}`"
             v-model="checkbox"
           ></v-checkbox>
           <v-radio-group v-model="radioGroup">
             <v-radio
               v-for="n in 3"
               :key="n"
               :label="`Size ${n}`"
               :value="n"
             ></v-radio>
           </v-radio-group>
           <v-switch
             :label="`Switch 1: ${switch1.toString()}`"
             v-model="switch1"
           ></v-switch>
         </v-container>
      </v-card-actions>
    </v-flex>

  </v-app>
</template>

<script>
export default {
  data () {
    return {
      checkbox: true,
      radioGroup: 1,
      switch1: true,
      openItem: false,
      openedItem: {},
      items: [
        {
          name: 'T-Shirt',
          description: 'Nice T-shirt',
          cost: '666',
          images: [
            { src: 'https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-0.3.5&s=b6ba0ea2d7f333a530d5e5fd603142c8&auto=format&fit=crop&w=1050&q=80'},
            { src: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e38c8acb1efde87bc0de1623e9a47cc8&auto=format&fit=crop&w=1050&q=80'},
            { src: 'https://images.unsplash.com/photo-1523380677598-64d85d015339?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ae563fe82df3422cd22f3fda460e0fb6&auto=format&fit=crop&w=1050&q=80'},
            { src: 'https://images.unsplash.com/photo-1523380545243-448ec2874065?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b6fc63753a42024db8fea262717478d2&auto=format&fit=crop&w=1050&q=80'}
          ] },
        {
          name: 'Cap',
          description: 'Cool Cap',
          cost: '777',
          images: [
            { src: 'https://images.unsplash.com/photo-1523380744952-b7e00e6e2ffa?ixlib=rb-0.3.5&s=309dc352f063adc5033e549717597fe4&auto=format&fit=crop&w=1050&q=80'},
            { src: 'https://images.unsplash.com/photo-1523380631334-4092043e47b9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7e40e245a93372e8108c8748e97208c3&auto=format&fit=crop&w=1050&q=80'}
          ] },
        {
          name: 'Pants',
          description: 'Awesome Pants',
          cost: '888',
          images: [
            { src: 'https://images.unsplash.com/photo-1523380838171-950f245362e5?ixlib=rb-0.3.5&s=791c275fc07b0b8e7bd5509ac76cc49b&auto=format&fit=crop&w=1050&q=80'},
            { src: 'https://images.unsplash.com/photo-1523380886783-80fdd1fce62d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7f25af50968b8f42406371c05ac27106&auto=format&fit=crop&w=1050&q=80'}
          ] },
        {
          name: 'Shoes',
          description: 'Comfortable Shoes',
          cost: '999',
          images: [
            { src: 'https://images.unsplash.com/photo-1517582837435-fdb3ccb5bb41?ixlib=rb-0.3.5&s=ee459733a00ab64a6fdd84cdc214be5c&auto=format&fit=crop&w=1050&q=80'},
            { src: 'https://images.unsplash.com/photo-1517583010307-3f789911b89c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=374be895f705e26402b32d55bffa818e&auto=format&fit=crop&w=634&q=80'},
            { src: 'https://images.unsplash.com/photo-1518246211798-aab7b6c994a8?ixlib=rb-0.3.5&s=91f354fbb9c1368eb753560b7c936d49&auto=format&fit=crop&w=1050&q=80'}
          ] },
        {
          name: 'Socks',
          description: 'Colourfull Socks',
          cost: '123',
          images: [
          { src: 'https://images.unsplash.com/photo-1484071096222-7936a931e094?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a4578f1107f7896f8f02bd701a6d3d52&auto=format&fit=crop&w=1050&q=80'}
          ] },
      ],
      states: ['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS',
      'MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY'],
      errorMessages: [],
      name: null,
      address: null,
      city: null,
      state: null,
      zip: null,
      formHasErrors: false
    }
  },

  watch: {
    name () {
      this.errorMessages = []
    }
  },

  methods: {
    addressCheck () {
      this.errorMessages = this.address && !this.name
        ? ['Hey! I\'m required']
        : []

      return true
    }
  }
}
</script>

<style scoped>
#itemImage{
  transition-duration: 1s;
  transition-property: all;
  transition-timing-function: ease;
}
#item:hover > #itemImage{
  transform: scale(0.9);
  border-radius:3em;
}
</style>
