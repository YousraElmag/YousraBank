"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import { User } from "@supabase/supabase-js";
import { supabase } from "../lib/supabase";
import Logout from "../logout/page";
import Link from "next/link";
export  default function payments(){
    return(
        <>
        <Navbar/>
        </>
    )
}