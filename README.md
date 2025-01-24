# Message Generator for Saturday Meetings

A Python application to generate formatted messages for Saturday meetings with a user-friendly GUI interface.

## Features

- 📅 Date picker for meeting date
- 🎵 Input field for opening song number
- 📖 Fields for talk outlines and titles
- 🎤 Speaker information
- 🏛️ Congregation details
- 🙏 Prayer confirmation dropdown
- 👀 Message preview with scrollable area
- 📋 Copy to clipboard functionality
- ✨ Modern and clean interface

## Installation

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

## Usage

1. Run the application:
```bash
python message_generator.py
```

2. Fill in the required fields:
   - Select the meeting date
   - Enter the opening song number
   - Enter the talk outline number and title
   - Enter speaker name and congregation
   - Select whether the speaker will pray at the end
   - Enter next week's talk information

3. Click "✨ Tạo tin nhắn" to generate the message
4. Review the message in the preview area
5. Click "📋 Sao chép tin nhắn" to copy the message to clipboard

## Message Format

The generated message will look like this:
```
👋 Chào các anh!

📅 Nhóm họp T7 ngày [date] có:

🎵 Bài hát mở đầu số: [song_number]

📖 Bài DVCC có tựa đề:
"[outline_number] [current_talk_title]"

🎤 Diễn giả: [speaker]
🏛️ Hội thánh: [congregation]
🙏 Diễn giả sẽ cầu nguyện kết thúc: [Có ✅/Không ❌]

📖 Bài DVCC cho thứ bảy tuần tới có tựa đề:
"[next_outline_number] [next_talk_title]"

🙏 Cảm ơn các anh.
```

## Requirements

- Python 3.7+
- tkcalendar==1.6.1
- pyperclip==1.8.2

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Email: anhbooi@gmail.com
Project Link: [https://github.com/JWCow/NhomHopCuoiTuan](https://github.com/JWCow/NhomHopCuoiTuan) 