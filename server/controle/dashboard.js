"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = handler;
const supabase_1 = require("../lib/supabase");
async function handler(req, res) {
    const token = req.headers.authorization?.split(" ")[1];
    const { data: { user }, error, } = await supabase_1.supabase.auth.getUser(token);
    const { receverAccount, amount } = req.body;
    if (error || !user) {
        return res.status(401).json({ error: "Unauthorized" });
    }
    const { error: transferError } = await supabase_1.supabase.rpc("transfer_money", {
        sender_id: user.id,
        receiver_account: receverAccount,
        amount,
    });
    if (transferError) {
        return res.status(400).json({ error: transferError.message });
    }
    res.json({ success: true, message: "Transfer completed successfully" });
}
