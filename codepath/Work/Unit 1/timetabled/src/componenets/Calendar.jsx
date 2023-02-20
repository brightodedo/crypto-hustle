import React from 'react'
import Event from './Event';

const Calendar = () => {
    return(
        <div className="Calendar">
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Sunday</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="time">8 am</td>
                        <Event event='Fancy Dinner 🎩' colofr='green' location='Maple & Ash'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Yolk 🍳' color ='green' location='Waffle House'/>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">9 am</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Subway 🚊' color ='pink' location="gsu marta"/>
                        <td></td>
                        <td></td>
                        <Event event='The Bean 🫘' color ='blue' location="10th st"/>
                    </tr>
                    <tr>
                        <td className="time">10 am</td>
                        <td></td>
                        <Event event="River Cruise 🚣🏼‍♀️" color="blue" location="river niger"/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">11 am</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event="Deep Dish🍕" color="green" location="pizzahut"/>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">12 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event="subway 🚂" color="pink" location="peachtree station"/>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">1 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">2 pm</td>
                        <td></td>
                        <td></td>
                        <Event event="Art institue 🖼" color="blue" location="high museum of art"/>
                        <td></td>
                        <Event event="Girl & the goat" color="green" location="aderhold"/>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">3 pm</td>
                        <Event event="Fun" color="blue" location="ferris wheel"/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event="subway 🚂" color="pink" location="civic station"/>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">4 pm</td>
                        <td></td>
                        <td></td>
                        <Event event="Fancy Dinner 👒" color="green" location="steakHouse"/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">5 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event="Shopping 🏪" color="blue" location="Lenox Mall"/>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Calendar;