const App = (() => {
    let currentLanguage = "vi";
    let outlines = [];
    let outlines_en = [];
    let congregations = [];
    let songs = [];

    const translations = {
        vi: {
            // UI elements
            appTitle: "✨ Tạo Thông Báo DVCC",
            dateLabel: "📅 Ngày:",
            openingSongLabel: "🎵 Bài hát mở đầu số:",
            selectSong: "Chọn bài hát",
            customOption: "Tùy chỉnh",
            customSongPlaceholder: "Nhập số bài hát",
            outlineNumLabel: "📖 Số Dàn Bài:",
            selectOutline: "Chọn số dàn bài",
            customOutlinePlaceholder: "Nhập số dàn bài",
            talkTitleLabel: "📖 Bài DVCC có tựa đề:",
            speakerLabel: "🎤 Diễn giả:",
            congregationLabel: "🏛️ Hội thánh:",
            selectCongregation: "Chọn hội thánh",
            customCongregationPlaceholder: "Nhập tên hội thánh",
            prayerLabel: "🙏 Cầu nguyện kết thúc?:",
            yesOption: "Có",
            noOption: "Không",
            imagesLabel: "🖼️ Có hình ảnh không?:",
            nextOutlineNumLabel: "📖 Số Dàn Bài tuần tới:",
            nextTalkTitleLabel: "📖 Bài DVCC tuần tới:",
            generateBtn: "✨ Tạo tin nhắn",
            copyBtn: "📋 Sao chép tin nhắn",
            langBtn: "🌐 English",
            
            // Generated message parts
            greeting: "👋 Chào các anh!",
            meetingDate: "📅 Nhóm họp ngày",
            has: "có",
            openingSong: "🎵 Bài hát mở đầu số:",
            talkTitle: "📖 Bài DVCC có tựa đề:",
            speaker: "🎤 Diễn giả:",
            congregation: "🏛️ Hội thánh:",
            closingPrayer: "🙏 Diễn giả sẽ cầu nguyện kết thúc:",
            imagesYes: "🖼️ Hình ảnh: ✅ Đã tải lên Google Drive.",
            imagesNo: "🖼️ Hình ảnh: 🚫 Không có hình ảnh.",
            nextWeekTalk: "📖 Bài DVCC cho thứ bảy tuần tới có tựa đề:",
            thanks: "🙏 Cảm ơn các anh.",
            copyAlert: "Vui lòng tạo tin nhắn trước khi sao chép!",
            copySuccess: "Đã sao chép tin nhắn vào clipboard!",
            copyError: "Không thể sao chép tin nhắn. Vui lòng thử lại!",
        },
        en: {
            // UI elements
            appTitle: "✨ Public Talk Announcer",
            dateLabel: "📅 Date:",
            openingSongLabel: "🎵 Opening Song Number:",
            selectSong: "Select song",
            customOption: "Custom",
            customSongPlaceholder: "Enter song number",
            outlineNumLabel: "📖 Outline Number:",
            selectOutline: "Select outline",
            customOutlinePlaceholder: "Enter outline number",
            talkTitleLabel: "📖 Public Talk Title:",
            speakerLabel: "🎤 Speaker:",
            congregationLabel: "🏛️ Congregation:",
            selectCongregation: "Select congregation",
            customCongregationPlaceholder: "Enter congregation name",
            prayerLabel: "🙏 Closing Prayer?:",
            yesOption: "Yes",
            noOption: "No",
            imagesLabel: "🖼️ Are there images?:",
            nextOutlineNumLabel: "📖 Next Week's Outline Number:",
            nextTalkTitleLabel: "📖 Next Week's Talk Title:",
            generateBtn: "✨ Generate Message",
            copyBtn: "📋 Copy Message",
            langBtn: "🌐 Tiếng Việt",

            // Generated message parts
            greeting: "👋 Hello brothers!",
            meetingDate: "📅 Meeting on",
            has: "includes",
            openingSong: "🎵 Opening Song Number:",
            talkTitle: "📖 Public Talk Title:",
            speaker: "🎤 Speaker:",
            congregation: "🏛️ Congregation:",
            closingPrayer: "🙏 Speaker will give closing prayer:",
            imagesYes: "🖼️ Images: ✅ Uploaded to Google Drive.",
            imagesNo: "🖼️ Images: 🚫 No images.",
            nextWeekTalk: "📖 Next Saturday's Public Talk Title:",
            thanks: "🙏 Thank you brothers.",
            copyAlert: "Please generate a message before copying!",
            copySuccess: "Message copied to clipboard!",
            copyError: "Could not copy message. Please try again!",
        }
    };

    const DOM = {
        langBtn: document.getElementById('langBtn'),
        appTitle: document.getElementById('appTitle'),
        dateLabel: document.getElementById('dateLabel'),
        date: document.getElementById('date'),
        openingSongLabel: document.getElementById('openingSongLabel'),
        songSelect: document.getElementById('songSelect'),
        songCustom: document.getElementById('songCustom'),
        songNumber: document.getElementById('songNumber'),
        outlineNumLabel: document.getElementById('outlineNumLabel'),
        outlineSelect: document.getElementById('outlineSelect'),
        outlineCustom: document.getElementById('outlineCustom'),
        outlineNumber: document.getElementById('outlineNumber'),
        talkTitleLabel: document.getElementById('talkTitleLabel'),
        talkTitle: document.getElementById('talkTitle'),
        speakerLabel: document.getElementById('speakerLabel'),
        speaker: document.getElementById('speaker'),
        congregationLabel: document.getElementById('congregationLabel'),
        congregationSelect: document.getElementById('congregationSelect'),
        congregation: document.getElementById('congregation'),
        prayerLabel: document.getElementById('prayerLabel'),
        prayerConfirm: document.getElementById('prayerConfirm'),
        imagesLabel: document.getElementById('imagesLabel'),
        imagesConfirm: document.getElementById('imagesConfirm'),
        nextOutlineNumLabel: document.getElementById('nextOutlineNumLabel'),
        nextOutlineSelect: document.getElementById('nextOutlineSelect'),
        nextOutlineCustom: document.getElementById('nextOutlineCustom'),
        nextOutlineNumber: document.getElementById('nextOutlineNumber'),
        nextTalkTitleLabel: document.getElementById('nextTalkTitleLabel'),
        nextTalkTitle: document.getElementById('nextTalkTitle'),
        generateBtn: document.getElementById('generateBtn'),
        copyBtn: document.getElementById('copyBtn'),
        preview: document.getElementById('preview'),
    };

    function updateLanguageUI() {
        const t = translations[currentLanguage];
        
        DOM.langBtn.textContent = t.langBtn;
        DOM.appTitle.textContent = t.appTitle;
        DOM.dateLabel.textContent = t.dateLabel;
        DOM.openingSongLabel.textContent = t.openingSongLabel;
        DOM.outlineNumLabel.textContent = t.outlineNumLabel;
        DOM.talkTitleLabel.textContent = t.talkTitleLabel;
        DOM.speakerLabel.textContent = t.speakerLabel;
        DOM.congregationLabel.textContent = t.congregationLabel;
        DOM.prayerLabel.textContent = t.prayerLabel;
        DOM.imagesLabel.textContent = t.imagesLabel;
        DOM.nextOutlineNumLabel.textContent = t.nextOutlineNumLabel;
        DOM.nextTalkTitleLabel.textContent = t.nextTalkTitleLabel;
        DOM.generateBtn.textContent = t.generateBtn;
        DOM.copyBtn.textContent = t.copyBtn;

        // Update placeholders
        DOM.songCustom.placeholder = t.customSongPlaceholder;
        DOM.outlineCustom.placeholder = t.customOutlinePlaceholder;
        DOM.congregation.placeholder = t.customCongregationPlaceholder;
        DOM.nextOutlineCustom.placeholder = t.customOutlinePlaceholder;

        // Update predefined options (Yes/No)
        Array.from(DOM.prayerConfirm.options).forEach(opt => {
            opt.textContent = opt.value === "Có" ? t.yesOption : t.noOption;
        });
        Array.from(DOM.imagesConfirm.options).forEach(opt => {
            opt.textContent = opt.value === "Có" ? t.yesOption : t.noOption;
        });

        // Repopulate dynamic lists to use new language titles
        populateSongsList();
        populateOutlineLists();
        populateCongregationsList();

        // Regenerate message if preview exists
        if (DOM.preview.textContent) {
            generateMessage();
        }
    }

    function toggleLanguage() {
        currentLanguage = currentLanguage === "vi" ? "en" : "vi";
        updateLanguageUI();
    }

    function formatDate(date) {
        if (!date) return "";
        const [year, month, day] = date.split("-");
        if (currentLanguage === "en") {
            return `${month}/${day}/${year}`;
        }
        return `${day}/${month}/${year}`;
    }

    function generateMessage() {
        const t = translations[currentLanguage];
        
        // Prevent generating if required fields are missing
        if (!DOM.date.value || !DOM.talkTitle.value || !DOM.speaker.value) {
            return;
        }

        const date = formatDate(DOM.date.value);
        const songNumber = DOM.songNumber.value;
        const song = songs.find((s) => s.number === songNumber);
        const songTitle = song
            ? (currentLanguage === "vi" ? song.title_vi : song.title_en)
            : "";
        const outlineNumber = DOM.outlineNumber.value;
        const talkTitle = DOM.talkTitle.value;
        const speaker = DOM.speaker.value;
        const congregation = DOM.congregationSelect.value === "custom" 
            ? DOM.congregation.value 
            : DOM.congregationSelect.value;
        const prayerConfirm = DOM.prayerConfirm.value;
        const imagesConfirm = DOM.imagesConfirm.value;
        const nextOutlineNumber = DOM.nextOutlineNumber.value;
        const nextTalkTitle = DOM.nextTalkTitle.value;

        const prayerEmoji = prayerConfirm === "Có" ? "✅" : "❌";
        const prayerText = currentLanguage === "vi"
            ? (prayerConfirm === "Có" ? "Có" : "Không")
            : (prayerConfirm === "Có" ? "Yes" : "No");

        const imagesText = imagesConfirm === "Có" ? `\n${t.imagesYes}` : `\n${t.imagesNo}`;

        const message = `${t.greeting}

${t.meetingDate} ${date} ${t.has}:

${t.openingSong} ${songNumber} ${songTitle ? `- "${songTitle}"` : ""}

${t.talkTitle}
"${outlineNumber} ${talkTitle}"

${t.speaker} ${speaker}
${t.congregation} ${congregation}
${t.closingPrayer} ${prayerText} ${prayerEmoji}${imagesText}

${t.nextWeekTalk}
"${nextOutlineNumber} ${nextTalkTitle}"

${t.thanks}`;

        DOM.preview.textContent = message;
    }

    function copyToClipboard() {
        const text = DOM.preview.textContent;
        const t = translations[currentLanguage];

        if (!text) {
            alert(t.copyAlert);
            return;
        }

        navigator.clipboard.writeText(text).then(() => {
            alert(t.copySuccess);
        }).catch((err) => {
            console.error("Copy failed:", err);
            alert(t.copyError);
        });
    }

    async function loadData() {
        try {
            const [outlinesRes, outlinesEnRes, congregationsRes, songsRes] = await Promise.all([
                fetch("outlines.json"),
                fetch("outlines_en.json"),
                fetch("congregations.json"),
                fetch("songs.json")
            ]);

            const [outlinesData, outlinesEnData, congregationsData, songsData] = await Promise.all([
                outlinesRes.json(),
                outlinesEnRes.json(),
                congregationsRes.json(),
                songsRes.json()
            ]);

            outlines = outlinesData.outlines;
            outlines_en = outlinesEnData.outlines;
            congregations = congregationsData.congregations;
            songs = songsData.songs;

            populateOutlineLists();
            populateCongregationsList();
            populateSongsList();
        } catch (error) {
            console.error("Error loading data:", error);
        }
    }

    function createOption(value, text) {
        const option = document.createElement("option");
        option.value = value;
        option.textContent = text;
        return option;
    }

    function populateSongsList() {
        const t = translations[currentLanguage];
        DOM.songSelect.innerHTML = "";
        DOM.songSelect.appendChild(createOption("", t.selectSong));
        DOM.songSelect.appendChild(createOption("custom", t.customOption));

        songs.forEach((song) => {
            const title = currentLanguage === "vi" ? song.title_vi : song.title_en;
            DOM.songSelect.appendChild(createOption(song.number, `${song.number.padStart(3, "0")} - ${title}`));
        });
        
        // Retain value if previously selected
        if (DOM.songNumber.value && DOM.songSelect.querySelector(`option[value="${DOM.songNumber.value}"]`)) {
            DOM.songSelect.value = DOM.songNumber.value;
        } else if (DOM.songNumber.value) {
            DOM.songSelect.value = "custom";
            DOM.songCustom.style.display = "block";
            DOM.songCustom.value = DOM.songNumber.value;
        }
    }

    function populateOutlineLists() {
        const t = translations[currentLanguage];
        const outlineSelects = [DOM.outlineSelect, DOM.nextOutlineSelect];
        const currentOutlines = currentLanguage === "vi" ? outlines : outlines_en;

        outlineSelects.forEach((select) => {
            const isNext = select === DOM.nextOutlineSelect;
            const numberInput = isNext ? DOM.nextOutlineNumber : DOM.outlineNumber;
            const customInput = isNext ? DOM.nextOutlineCustom : DOM.outlineCustom;

            select.innerHTML = "";
            select.appendChild(createOption("", t.selectOutline));
            select.appendChild(createOption("custom", t.customOption));

            currentOutlines.forEach((outline) => {
                select.appendChild(createOption(outline.number, `${outline.number.padStart(3, "0")} - ${outline.title}`));
            });

            // Retain value
            if (numberInput.value && select.querySelector(`option[value="${numberInput.value}"]`)) {
                select.value = numberInput.value;
            } else if (numberInput.value) {
                select.value = "custom";
                customInput.style.display = "block";
                customInput.value = numberInput.value;
            }
        });
    }

    function populateCongregationsList() {
        const t = translations[currentLanguage];
        DOM.congregationSelect.innerHTML = "";
        DOM.congregationSelect.appendChild(createOption("", t.selectCongregation));
        DOM.congregationSelect.appendChild(createOption("custom", t.customOption));

        congregations.forEach((congregation) => {
            DOM.congregationSelect.appendChild(createOption(congregation.name, congregation.name));
        });
        
        // Retain value
        const val = DOM.congregation.value;
        if (val && DOM.congregationSelect.querySelector(`option[value="${val}"]`)) {
            DOM.congregationSelect.value = val;
            DOM.congregation.style.display = "none";
        } else if (val) {
            DOM.congregationSelect.value = "custom";
            DOM.congregation.style.display = "block";
        }
    }

    // Generic Dropdown Handler
    function handleDropdownChange(selectElement, customInput, hiddenInput, detailInputs = []) {
        const value = selectElement.value;
        if (value === "custom") {
            customInput.style.display = "block";
            if (hiddenInput) hiddenInput.value = "";
            customInput.focus();
            detailInputs.forEach(input => input.value = "");
        } else {
            customInput.style.display = "none";
            if (hiddenInput) hiddenInput.value = value;
            return true; // Indicates a standard value was selected from the list
        }
        return false;
    }

    function attachEvents() {
        DOM.langBtn.addEventListener('click', toggleLanguage);
        DOM.generateBtn.addEventListener('click', generateMessage);
        DOM.copyBtn.addEventListener('click', copyToClipboard);

        DOM.songSelect.addEventListener('change', (e) => {
            handleDropdownChange(e.target, DOM.songCustom, DOM.songNumber);
        });
        DOM.songCustom.addEventListener('input', (e) => {
            DOM.songNumber.value = e.target.value;
        });

        DOM.outlineSelect.addEventListener('change', (e) => {
            if (handleDropdownChange(e.target, DOM.outlineCustom, DOM.outlineNumber, [DOM.talkTitle])) {
                const currentOutlines = currentLanguage === "vi" ? outlines : outlines_en;
                const outline = currentOutlines.find(o => o.number === e.target.value);
                if (outline) DOM.talkTitle.value = outline.title;
            }
        });
        DOM.outlineCustom.addEventListener('input', (e) => {
            DOM.outlineNumber.value = e.target.value;
        });

        DOM.nextOutlineSelect.addEventListener('change', (e) => {
            if (handleDropdownChange(e.target, DOM.nextOutlineCustom, DOM.nextOutlineNumber, [DOM.nextTalkTitle])) {
                const currentOutlines = currentLanguage === "vi" ? outlines : outlines_en;
                const outline = currentOutlines.find(o => o.number === e.target.value);
                if (outline) DOM.nextTalkTitle.value = outline.title;
            }
        });
        DOM.nextOutlineCustom.addEventListener('input', (e) => {
            DOM.nextOutlineNumber.value = e.target.value;
        });

        DOM.congregationSelect.addEventListener('change', (e) => {
            handleDropdownChange(e.target, DOM.congregation, null); // uses congregation input directly
        });
    }

    function init() {
        DOM.date.valueAsDate = new Date();
        updateLanguageUI();
        attachEvents();
        loadData();
    }

    return {
        init
    };
})();

document.addEventListener("DOMContentLoaded", App.init);
