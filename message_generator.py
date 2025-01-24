import tkinter as tk
from tkinter import ttk
import pyperclip
from tkcalendar import DateEntry
from datetime import datetime

class MessageGenerator:
    def __init__(self, root):
        self.root = root
        self.root.title("Message Generator")
        self.root.geometry("600x800")  # Adjusted size
        
        # Configure style
        style = ttk.Style()
        style.configure('TLabel', font=('Segoe UI', 12))
        style.configure('TEntry', font=('Segoe UI', 12))
        style.configure('TButton', font=('Segoe UI', 12, 'bold'))
        style.configure('Generate.TButton', font=('Segoe UI', 12, 'bold'), padding=8)
        style.configure('Copy.TButton', font=('Segoe UI', 12, 'bold'))
        
        # Create and configure main frame
        main_frame = ttk.Frame(root, padding="10")
        main_frame.grid(row=0, column=0, sticky=(tk.W, tk.E, tk.N, tk.S))
        root.columnconfigure(0, weight=1)
        root.rowconfigure(0, weight=1)
        
        # Input fields
        current_row = 0
        
        # Date
        ttk.Label(main_frame, text="📅  Ngày:", font=('Segoe UI', 12)).grid(row=current_row, column=0, sticky=tk.W, pady=5)
        self.date_entry = DateEntry(main_frame, width=15, background='darkblue',
                                  foreground='white', borderwidth=2, date_pattern='dd/mm/yyyy',
                                  font=('Segoe UI', 12))
        self.date_entry.grid(row=current_row, column=1, sticky=tk.W, pady=5, padx=(10, 0))
        current_row += 1
        
        # Song number
        ttk.Label(main_frame, text="🎵  Bài hát mở đầu số:", font=('Segoe UI', 12)).grid(row=current_row, column=0, sticky=tk.W, pady=5)
        self.song_number = ttk.Entry(main_frame, width=15, font=('Segoe UI', 12))
        self.song_number.grid(row=current_row, column=1, sticky=tk.W+tk.E, pady=5, padx=(10, 0))
        current_row += 1
        
        # Current talk outline and title
        ttk.Label(main_frame, text="📖  Số Dàn Bài:", font=('Segoe UI', 12)).grid(row=current_row, column=0, sticky=tk.W, pady=5)
        self.current_outline = ttk.Entry(main_frame, width=15, font=('Segoe UI', 12))
        self.current_outline.grid(row=current_row, column=1, sticky=tk.W+tk.E, pady=5, padx=(10, 0))
        current_row += 1
        
        ttk.Label(main_frame, text="📖  Bài DVCC có tựa đề:", font=('Segoe UI', 12)).grid(row=current_row, column=0, sticky=tk.W, pady=5)
        self.current_talk = ttk.Entry(main_frame, width=35, font=('Segoe UI', 12))
        self.current_talk.grid(row=current_row, column=1, sticky=tk.W+tk.E, pady=5, padx=(10, 0))
        current_row += 1
        
        # Speaker
        ttk.Label(main_frame, text="🎤  Diễn giả:", font=('Segoe UI', 12)).grid(row=current_row, column=0, sticky=tk.W, pady=5)
        self.speaker = ttk.Entry(main_frame, width=15, font=('Segoe UI', 12))
        self.speaker.grid(row=current_row, column=1, sticky=tk.W+tk.E, pady=5, padx=(10, 0))
        current_row += 1
        
        # Congregation
        ttk.Label(main_frame, text="🏛️  Hội thánh:", font=('Segoe UI', 12)).grid(row=current_row, column=0, sticky=tk.W, pady=5)
        self.congregation = ttk.Entry(main_frame, width=15, font=('Segoe UI', 12))
        self.congregation.grid(row=current_row, column=1, sticky=tk.W+tk.E, pady=5, padx=(10, 0))
        current_row += 1
        
        # Prayer confirmation
        ttk.Label(main_frame, text="🙏  Diễn giả sẽ cầu nguyện kết thúc:", font=('Segoe UI', 12)).grid(row=current_row, column=0, sticky=tk.W, pady=5)
        self.prayer_confirm = ttk.Combobox(main_frame, values=["Có", "Không"], width=13, state="readonly", font=('Segoe UI', 12))
        self.prayer_confirm.set("Có")
        self.prayer_confirm.grid(row=current_row, column=1, sticky=tk.W, pady=5, padx=(10, 0))
        current_row += 1
        
        # Next week talk outline and title
        ttk.Label(main_frame, text="📖  Số Dàn Bài tuần tới:", font=('Segoe UI', 12)).grid(row=current_row, column=0, sticky=tk.W, pady=5)
        self.next_outline = ttk.Entry(main_frame, width=15, font=('Segoe UI', 12))
        self.next_outline.grid(row=current_row, column=1, sticky=tk.W+tk.E, pady=5, padx=(10, 0))
        current_row += 1
        
        ttk.Label(main_frame, text="📖  Bài DVCC tuần tới:", font=('Segoe UI', 12)).grid(row=current_row, column=0, sticky=tk.W, pady=5)
        self.next_talk = ttk.Entry(main_frame, width=35, font=('Segoe UI', 12))
        self.next_talk.grid(row=current_row, column=1, sticky=tk.W+tk.E, pady=5, padx=(10, 0))
        current_row += 1
        
        # Generate button
        generate_btn = ttk.Button(main_frame, text="✨ Tạo tin nhắn", command=self.generate_message, style='Generate.TButton')
        generate_btn.grid(row=current_row, column=0, columnspan=2, pady=10)
        current_row += 1
        
        # Preview area with scrollbar
        ttk.Label(main_frame, text="👀 Xem trước tin nhắn:", font=('Segoe UI', 12, 'bold')).grid(row=current_row, column=0, columnspan=2, sticky=tk.W, pady=5)
        current_row += 1
        
        # Create a frame for the preview area and scrollbar
        preview_frame = ttk.Frame(main_frame)
        preview_frame.grid(row=current_row, column=0, columnspan=2, pady=5, sticky=tk.NSEW)
        preview_frame.columnconfigure(0, weight=1)  # Make the text widget expand
        
        # Add scrollbar
        scrollbar = ttk.Scrollbar(preview_frame)
        scrollbar.grid(row=0, column=1, sticky=tk.NS)
        
        # Add text widget with scrollbar
        self.preview = tk.Text(preview_frame, width=45, height=13, font=('Segoe UI', 12), wrap=tk.WORD, yscrollcommand=scrollbar.set)
        self.preview.grid(row=0, column=0, sticky=tk.NSEW)
        
        # Configure scrollbar
        scrollbar.config(command=self.preview.yview)
        current_row += 1
        
        # Copy button
        copy_btn = ttk.Button(main_frame, text="📋 Sao chép tin nhắn", command=self.copy_to_clipboard, style='Copy.TButton')
        copy_btn.grid(row=current_row, column=0, columnspan=2, pady=5)
        
        # Configure grid columns
        main_frame.columnconfigure(1, weight=1)
    
    def generate_message(self):
        prayer_emoji = "✅" if self.prayer_confirm.get() == "Có" else "❌"
        
        message = f"""👋 Chào các anh!

📅 Nhóm họp T7 ngày {self.date_entry.get()} có:

🎵 Bài hát mở đầu số: {self.song_number.get()}

📖 Bài DVCC có tựa đề:
"{self.current_outline.get()} {self.current_talk.get()}"

🎤 Diễn giả: {self.speaker.get()}
🏛️ Hội thánh: {self.congregation.get()}
🙏 Diễn giả sẽ cầu nguyện kết thúc: {self.prayer_confirm.get()} {prayer_emoji}

📖 Bài DVCC cho thứ bảy tuần tới có tựa đề:
"{self.next_outline.get()} {self.next_talk.get()}"

🙏 Cảm ơn các anh."""
        
        self.preview.delete(1.0, tk.END)
        self.preview.insert(1.0, message)
    
    def copy_to_clipboard(self):
        message = self.preview.get(1.0, tk.END)
        pyperclip.copy(message)

if __name__ == "__main__":
    root = tk.Tk()
    app = MessageGenerator(root)
    root.mainloop() 