"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Login = Login;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const supabase_1 = require("../lib/supabase");
async function Login(req, res) {
    const { email, password } = req.body;
    const { data, error } = await supabase_1.supabase.auth.signInWithPassword({
        email,
        password,
    });
    if (error) {
        return res.status(400).json({ error: error.message });
    }
    res.status(200).json({ user: data.user });
}
