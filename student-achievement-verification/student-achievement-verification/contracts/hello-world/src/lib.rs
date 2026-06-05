
#![no_std]

use soroban_sdk::{contract, contractimpl, symbol_short, Env, String};

#[contract]
pub struct AchievementContract;

#[contractimpl]
impl AchievementContract {
    pub fn save_achievement(
        env: Env,
        student_name: String,
        achievement: String,
        year: u32,
    ) {
        let key = symbol_short!("ACHIEVE");

        let data = (
            student_name,
            achievement,
            year,
        );

        env.storage().persistent().set(&key, &data);
    }

    pub fn get_achievement(
        env: Env,
    ) -> (String, String, u32) {
        let key = symbol_short!("ACHIEVE");

        env.storage()
            .persistent()
            .get(&key)
            .unwrap()
    }
}