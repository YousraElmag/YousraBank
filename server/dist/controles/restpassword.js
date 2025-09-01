"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetPassword = resetPassword;
const supabase_1 = require("../lib/supabase");
async function resetPassword(req, res) {
    const { email } = req.body;
    if (!email)
        return res.status(400).json({ error: "Email is required" });
    const { error } = await supabase_1.supabase.auth.resetPasswordForEmail(email, { redirectTo: "http://localhost:3000/updatepassword" });
    if (error)
        return res.status(400).json({ error: error.message });
    res.json({ message: "Password reset email sent" });
}
