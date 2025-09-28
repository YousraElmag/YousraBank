"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Register = Register;
;
const supabase_1 = require("../lib/supabase");
function generateBankAccount() {
    const prefix = "YOUS";
    let randomDigits = "";
    for (let i = 0; i < 6; i++) {
        randomDigits += Math.floor(Math.random() * 10).toString();
    }
    return prefix + randomDigits;
}
async function Register(req, res) {
    const { email, password, firstname, lastname } = req.body;
    try {
        const { data, error } = await supabase_1.supabase.auth.signUp({
            email,
            password,
            options: {
                data: { firstname, lastname },
                emailRedirectTo: "https://yousra-bank.vercel.app/login"
            },
        });
        if (error)
            return res.status(400).json({ error: error.message });
        if (!data.user)
            return res.status(400).json({ error: "User not created" });
        const bankAccount = generateBankAccount();
        const { error: insertUserError } = await supabase_1.supabase.from("users").insert([
            {
                id: data.user.id,
                email: data.user.email,
                first_name: firstname,
                last_name: lastname,
                bank_account: bankAccount,
                balance: 100
            }
        ]);
        if (insertUserError)
            return res.status(400).json({ error: insertUserError.message });
        const { error: insertPaymentError } = await supabase_1.supabase.from("payments").insert([
            {
                user_id: data.user.id,
                sender_id: data.user.id,
                recipient_id: data.user.id,
                amount: 0,
                currency: "EUR",
            }
        ]);
        if (insertPaymentError)
            return res.status(400).json({ error: insertPaymentError.message });
        res.status(201).json({
            message: "User registered successfully",
            user: data.user,
            bank_account: bankAccount
        });
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
}
