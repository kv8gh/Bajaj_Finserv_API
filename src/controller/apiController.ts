import { Request, Response } from "express";
import { BFHLRequest, BFHLResponse } from "../types/index.js";
import { isAlphabet, isNumber, makeConcatString } from "../utils/helper.js";

const FULL_NAME="Karan_Vyas"
const DOB="01012000"
const EMAIL="vyaskaran@email.com"
const ROLL_NUMBER="22BIT0092"

export const handleApiRequest = (req: Request, res: Response): void => {
  try {
    const { data } = req.body as BFHLRequest;

    if (!Array.isArray(data)) {
      res.status(400).json({
        is_success: false,
        message: "Invalid input: 'data' must be an array of strings"
      });
      return;
    }

    const even_numbers: string[] = [];
    const odd_numbers: string[] = [];
    const alphabets: string[] = [];
    const special_characters: string[] = [];
    let sum = 0;

    data.forEach((item) => {
      if (isNumber(item)) {
        Number(item) % 2 === 0 ? even_numbers.push(item) : odd_numbers.push(item);
        sum += Number(item);
      } else if (isAlphabet(item)) {
        alphabets.push(item.toUpperCase());
      } else {
        special_characters.push(item);
      }
    });

    const response: BFHLResponse = {
      is_success: true,
      user_id: `${FULL_NAME}_${DOB}`,
      email: EMAIL ?? "",
      roll_number: ROLL_NUMBER ?? "",
      odd_numbers,
      even_numbers,
      alphabets,
      special_characters,
      sum: sum.toString(),
      concat_string: makeConcatString(alphabets)
    };

    res.status(200).json(response);
  } catch (err: any) {
    res.status(500).json({ is_success: false, error: err.message });
  }
};
