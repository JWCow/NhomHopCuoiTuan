# Message Generator for Saturday Meetings

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Python](https://img.shields.io/badge/Python-3.7+-blue.svg)](https://www.python.org/downloads/)
[![Windows](https://img.shields.io/badge/Windows-10+-brightgreen.svg)](https://www.microsoft.com/windows)
[![Release](https://img.shields.io/badge/Release-v1.0-orange.svg)](https://github.com/JWCow/NhomHopCuoiTuan/releases)

A modern, user-friendly Python application to generate formatted messages for Saturday meetings. Built with tkinter and featuring a clean, emoji-enhanced interface.

<div align="center">

![Message Generator](https://socialify.git.ci/JWCow/NhomHopCuoiTuan/image?description=1&font=Inter&forks=1&issues=1&language=1&name=1&owner=1&pattern=Circuit%20Board&pulls=1&stargazers=1&theme=Light)

</div>

## ✨ Features

- 📅 Smart date picker with calendar interface
- 🎵 Easy input fields for all message components
- 📖 Support for talk outlines and titles
- 🎤 Speaker and congregation information
- 🙏 Prayer confirmation with visual indicators
- 👀 Live message preview with scrolling
- 📋 One-click copy to clipboard
- 🎨 Modern and clean interface
- 🚀 Standalone executable - no Python required!

## 🚀 Quick Start

### Option 1: Run Executable (Windows)
1. Download `Message Generator.exe` from the [latest release](https://github.com/JWCow/NhomHopCuoiTuan/releases)
2. Double-click to run - no installation needed!

### Option 2: Run from Source
1. Make sure you have Python 3.7 or higher installed
2. Clone this repository:
```bash
git clone https://github.com/JWCow/NhomHopCuoiTuan.git
cd NhomHopCuoiTuan
```

3. Install the required dependencies:
```bash
pip install -r requirements.txt
```

4. Run the application:
```bash
python message_generator.py
```

## 📝 Usage

1. Fill in the required fields:
   - Select meeting date from calendar
   - Enter opening song number
   - Enter talk outline number and title
   - Add speaker name and congregation
   - Select prayer confirmation
   - Enter next week's talk information

2. Click "✨ Tạo tin nhắn" to generate
3. Review in the preview area
4. Click "📋 Sao chép tin nhắn" to copy

## 📋 Message Format

```
👋 Chào các anh!

Nhóm họp ngày 📅 [date] có:

Bài hát mở đầu số 🎵: [song_number]

Bài DVCC có tựa đề 📖:
"[outline_number] [current_talk_title]"

Diễn giả 🎤: [speaker]
Hội thánh 🏛️: [congregation]
Diễn giả sẽ cầu nguyện kết thúc 🙏: [Có ✅/Không ❌]

Bài DVCC cho thứ bảy tuần tới có tựa đề 📖:
"[next_outline_number] [next_talk_title]"

🙏 Cảm ơn các anh.
```

## 🛠️ Technical Details

- **Python Version:** 3.7+
- **GUI Framework:** tkinter
- **Dependencies:**
  - tkcalendar==1.6.1
  - pyperclip==1.8.2

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch:
```bash
git checkout -b feature/AmazingFeature
```
3. Commit your changes:
```bash
git commit -m 'Add some AmazingFeature'
```
4. Push to the branch:
```bash
git push origin feature/AmazingFeature
```
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- Email: anhbooi@gmail.com
- Project Link: [https://github.com/JWCow/NhomHopCuoiTuan](https://github.com/JWCow/NhomHopCuoiTuan)

---
<div align="center">
Made with ❤️ by JWCow
</div> 