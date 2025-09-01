"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Register = Register;
const supabase_1 = require("../lib/supabase");
async function Register(req, res) {
    const { email, password, firstname, lastname } = req.body;
    const { data, error } = await supabase_1.supabase.auth.signUp({ email, password,
        options: {
            data: {
                firstname,
                lastname,
            },
        },
    });
    if (error) {
        return res.status(400).json({ error: error.message });
    }
    res.status(200).json({ user: data.user });
}
