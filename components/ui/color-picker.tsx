"use client";

import { useState, ChangeEvent } from "react";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ColorPicker() {
    const [color, setColor] = useState<string>("#000000");

    const handleColorChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setColor(e.target.value);
    };

    const copyToClipboard = (): void => {
        navigator.clipboard.writeText(color);
        alert("Copied Color to clipboard");
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900"
        style={{
            backgroundImage: `url('/colorpicker1.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}
        >
            <Card className="w-90 max-w-md mx-auto p-8 grid gap-8 border-2 border-gray-500 rounded-xl shadow-2xl  bg-gradient-to-br from-red-300 via-orange-300 to-yellow-300">
                <div className="text-center space-y-2">
                    <CardTitle>Color Picker</CardTitle>
                    <CardDescription>
                        Select a color and copy the hex and RGB values.
                    </CardDescription>
                </div>
                <div className="grid gap-4">
                    <div
                    className="w-full h-48 rounded-2xl border-4 border-gray-300 dark:border-gray-800"
                    style={{ backgroundColor: color }}
                    />
                    <div className="grid gap-2 text-center">
                        <div className="text-2xl font-semibold">{color}</div>
                        <div className="text-gray-500 dark:text-gray-400">
                        RGB: {parseInt(color.slice(1, 3), 16)},{" "}
                        {parseInt(color.slice(3, 5), 16)},{" "}
                        {parseInt(color.slice(5, 7), 16)}
                        </div>
                        <Button
                        onClick={copyToClipboard}
                        variant="default"
                        className="w-full rounded-3xl"
                        >Copy to Clipboard</Button>
                    </div>
                    <Input
                    type="color"
                    value={color}
                    onChange={handleColorChange}
                    className="w-full h-16 p-0 border-0 rounded-md cursor-pointer"
                    />
                </div>
            </Card>
        </div>
    );
}
