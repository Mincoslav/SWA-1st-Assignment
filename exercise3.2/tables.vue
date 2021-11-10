<template>
    <div>
        <table class="minimalistBlack">
            <tr>
                <th> 
                    <label for="latesteTemperature">Latest Temperature</label>
                    <input type="number" name="value" v-model="from.value" />
                </th>

                <th>
                    <label for="latestPrecipitation">Latest Precipitation</label>
                    <input type="number" name="value" v-model="from.value" />
                </th>

                <th>
                    <label for="latestWind">Latest Wind</label>
                    <input type="number" name="value" v-model="from.value" />
                </th>

                <th>
                    <label for="latesteCloudCoverage">Latest Cloud Coverage</label>
                    <input type="number" name="value" v-model="from.value" />
                
                </th>
            </tr>
        </table>

        <table class="minimalistBlack">
            <thead>
                <tr>
                    <th>
                        <label for="minTemperatureForLast5days">Minimum temperature for last 5 days</label>
                        <input type="number" name="value" v-model="from.value" />
                    </th>

                    <th>
                        <label for="maxTemperatureForLast5days">Maximum temperature for last 5 days</label>
                        <input type="number" name="value" v-model="from.value" />
                    </th>

                    <th>
                        <label for="totalPrecipitationForLast5days">Total precipitation for last 5 days</label>
                        <input type="number" name="value" v-model="from.value" />
                    </th>
                        
                    <th>
                        <label for="totalPrecipitationForLast5days">Total precipitation for last 5 days</label>
                        <input type="number" name="value" v-model="from.value" />
                    </th>
                    
                    <th>
                        <label for="averageWindForLast5days">Average wind speed for the last 5 days</label>
                        <input type="number" name="value" v-model="from.value" />
                    </th>
                </tr>
            </thead>
        </table>

        <table>
            <thead>
                <tr id='temperatureRow'>
                    <th>
                        <td>Temperature</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </th>
                </tr>
            </thead>
        </table>
    </div>
</template>
<script>

import { defineComponent } from '@vue/composition-api'
@App({})
export default defineComponent({
    setup() {
        
    },
    name: "minimalistBlack",
        data() {    
            return {
                columns: [
                    {name: 'value', text: 'value'},
                    {name: 'type', text: 'type'},
                    {name: 'unit', text: 'Unit'},
                    {name: 'time', text: 'Time'},
                    {name: 'place', text: 'Place'}
                ],
            }
        },
    components: {
        defineComponent
    },
    created() {
        let id = 0;
        this.getAllData().then(response => {                console.log(response)
            this.entries = response.map(element => ({
                value: element.value,
                type: element.type,
                unit: element.unit,
                time: element.time,
                place: element.place
            }));
        });
    },
    methods: {
                
    }
})






