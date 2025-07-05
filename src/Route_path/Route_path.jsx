import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Component/Body/Home/Home';
import AboutUs from '../Component/Body/AboutUs/AboutUs';
import Products from '../Component/Body/Products/Products';
import Automated_control_panles from '../Component/Body/Products/Automated_control_panles/Automated_control_panles';
import Special_purpose_machineries from '../Component/Body/Products/Special_purpose_machineries/Special_purpose_machineries';
import Contact from '../Component/Body/Contact/Contact';
import VisionBasedSystems from '../Component/Body/Products/Vision_based_automation/Vision_based_automation';
import Customized_robotic_system from '../Component/Body/Products/Customized_robotic_system/Customized_robotic_system';
import Powder_coating_plant from '../Component/Body/Products/Powder_coating_plant/Powder_coating_plant';
import Liqud_paint_shop from '../Component/Body/Products/Liqud_paint_shop/Liqud_paint_shop';
import Plating_Plant from '../Component/Body/Products/Plating_Plant/Plating_Plant';
import Full_automated_water_treatment_plant from '../Component/Body/Products/Full_automated_water_treatment_plant/Full_automated_water_treatment_plant';
import Solutions from '../Component/Solutions/Solutions';
import Industrial from '../Component/Body/Industrial/Industrial';
import Water_treatment_plant from '../Component/Body/Industrial/Water_Treatment_plant/Water_Treatment_plant';
import Cement_Industries from '../Component/Body/Industrial/Cement_Industries/Cement_Industries';
import Poultry_Breeding_Farms from '../Component/Body/Industrial/Poultry_Breeding_Farms/Poultry_Breeding_Farms';
import Food_Beverage_industries from '../Component/Body/Industrial/Food_Beverage_industries/Food_Beverage_industries';
import OEM_industrial_control_panels from '../Component/Body/Industrial/OEM_industrial_control_panels/OEM_industrial_control_panels';
import Health_care_industrise from '../Component/Body/Industrial/Health_care_industrise/Health_care_industrise';
import We_are_Deal_plc_and_hmi_controller from '../Component/Body/Products/Automated_control_panles/We_are_Deal_plc_and_hmi_controller/We_are_Deal_plc_and_hmi_controller';
import Allen_Bradly from '../Component/Body/Products/Automated_control_panles/We_are_Deal_plc_and_hmi_controller/Allen_Bradly/Allen_Bradly';
import Delta from '../Component/Body/Products/Automated_control_panles/We_are_Deal_plc_and_hmi_controller/Delta/Delta';
import Omron from '../Component/Body/Products/Automated_control_panles/We_are_Deal_plc_and_hmi_controller/Omron/Omron';
import Mitsubishi from '../Component/Body/Products/Automated_control_panles/We_are_Deal_plc_and_hmi_controller/Mitsubishi/Mitsubishi';

export default function Route_path (){

    return(

        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<AboutUs/>}/>
            <Route path='/products' element={<Products/>}/>
            <Route path='/automated' element={<Automated_control_panles/>}/>
            <Route path='/special' element={<Special_purpose_machineries/>}/>
            <Route path="/contact" element={<Contact />} />
            <Route path='/VisionBasedSystems' element={<VisionBasedSystems/>}/>
            <Route path='/Customized_robotic_system' element={<Customized_robotic_system/>}/>
            <Route path='/Powder_coating_plant' element={<Powder_coating_plant/>}/>
            <Route path='/Liqud_paint_shop' element={<Liqud_paint_shop/>}/>
            <Route path='/Plating_Plant' element={<Plating_Plant/>}/>
            <Route path='/Full_automated_water_treatment_plant' element={<Full_automated_water_treatment_plant/>}/>
            <Route path='/Solutions' element={<Solutions/>}/>
            <Route path='/Industrial' element={<Industrial/>}/>
            <Route path='/water_treatment_plant' element={<Water_treatment_plant/>}/>
            <Route path='/Cement_Industries' element={<Cement_Industries/>}/>
            <Route path='/Poultry_Breeding_Farms' element={<Poultry_Breeding_Farms/>}/>
            <Route path='/Food_Beverage_industries' element={<Food_Beverage_industries/>}/>
            <Route path='/OEM_industrial_control_panels' element={<OEM_industrial_control_panels/>}/>
            <Route path='/Health_care_industrise' element={<Health_care_industrise/>}/>
            <Route path='/We_are_Deal_plc_and_hmi_controller' element={<We_are_Deal_plc_and_hmi_controller/>}/>
            <Route path='/Allen_Bradly' element={<Allen_Bradly/>}/>
            <Route path='/Delta' element={<Delta/>}/>
            <Route path='/Omron' element={<Omron/>}/>
            <Route path='/Mitsubishi' element={<Mitsubishi/>}/>
        </Routes>

    )

}