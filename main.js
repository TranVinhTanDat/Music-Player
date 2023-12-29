const $ = document.querySelector.bind(document);
      const $$ = document.querySelectorAll.bind(document);
      const PLAY_STORAGE_KEY = "F8_PLAY";
      const header = $("header h2");
      const cdThumb = $(".cd-thumb");
      const audio = $("#audio");
      const cd = $(".cd");
      const playBtn = $(".btn-toggle-play");
      const player = $(".player");
      const progress = $("#progress");
      const prevBtn = $(".btn-prev");
      const nextBtn = $(".btn-next");
      const randomBtn = $(".btn-random");
      const repeatBtn = $(".btn-repeat");
      const playlist = $(".playlist");
      const app = {
        currentIndex: 0,
        isPlaying: false,
        isRandom: false,
        isRepeat: false,
        config: JSON.parse(localStorage.getItem(PLAY_STORAGE_KEY)) || {},
        setConfig: function (key, value) {
          this.config[key] = value; // Sửa chữa phép gán giá trị mới vào config
          localStorage.setItem(PLAY_STORAGE_KEY, JSON.stringify(this.config));
        },
        songs: [
          // {
          //   name: "Mùa Hè Tuyệt Vời",
          //   singer: "Đức Phúc",
          //   path: "./Music-Play/Music/MuaHeTuyetVoiLalawonder-DucPhuc-9835888.mp3",
          //   image: "./Music-Play/Image-music/MuaHeTuyetVoi.jpg",
          // },
          {
            name: "Đường Tôi Chở Em Về",
            singer: "Thinh Suy",
            path: "./Music-Play/Music/DuongToiChoEmVe.mp3",
            image: "./Music-Play/Image-music/DuongToiChoEmVe.jpg",
          },
          {
            name: "Nơi Này Có Anh",
            singer: "Sơn Tùng MTP",
            path: "./Music-Play/Music/NoiNayCoAnh.mp3",
            image: "./Music-Play/Image-music/NoiNayCoAnh.jpg",
          },
          {
            name: "Ghé Qua",
            singer: "Khắc Việt",
            path: "./Music-Play/Music/GheQua-TaynguyenSoundTofuPC-7031399.mp3",
            image: "./Music-Play/Image-music/GheQua.jpg",
          },
          {
            name: "Người Âm Phu3",
            singer: "Osad",
            path: "./Music-Play/Music/NguoiAmPhu-MaiQuangNamVRT-5437858.mp3",
            image: "./Music-Play/Image-music/NguoiAmPhu.jpg",
          },
          {
            name: "Em Hãy Cười Nhiều Lên Đi",
            singer: "Khắc Việt",
            path: "./Music-Play/Music/EmHayCuoi.mp4",
            image: "./Music-Play/Image-music/EmHayCuoiNhieuLenDi.jpg",
          },
          {
            name: "Yêu",
            singer: "Khắc Việt",
            path: "./Music-Play/Music/Yeu-KhacViet-4520698.mp3",
            image: "./Music-Play/Image-music/Yeu.jpg",
          },
          {
            name: "Như Ngày Hôm Qua",
            singer: "Sơn Tùng MTP",
            path: "./Music-Play/Music/NhuNgayHomQuaUpgrade-SonTungMTP-4282962.mp3",
            image: "./Music-Play/Image-music/NhuNgayHomQua.jpg",
          },
          {
            name: "Người Ấy",
            singer: "Trịnh Thăng Bình",
            path: "./Music-Play/Music/NguoiAy-TrinhThangBinh-4086656.mp3",
            image: "./Music-Play/Image-music/NguoiAy.jpg",
          },
          {
            name: "4 Mùa Thương Em",
            singer: "Lập Nguyên",
            path: "./Music-Play/Music/4MuaThuongEm-LapNguyen-8365312.mp3",
            image: "./Music-Play/Image-music/4MuaThuongEm.jpg",
          },
          
          {
            name: "Way Back Home",
            singer: "SHAUN",
            path: "./Music-Play/Music/WayBackHome-SHAUN-5564971.mp3",
            image: "./Music-Play/Image-music/WayBackHome.jpg",
          },
          {
            name: "Năm Tháng Ấy",
            singer: "Green",
            path: "./Music-Play/Music/NamThangAy-Green-6283400.mp3",
            image: "./Music-Play/Image-music/NamThangAy.jpg",
          },
      
          
          {
            name: "Tháng Tư Là Lời Nói Dối Của Em",
            singer: "Hà Anh Tuấn",
            path: "./Music-Play/Music/Thang-Tu-La-Loi-Noi-Doi-Cua-Em-Ha-Anh-Tuan.mp3",
            image: "./Music-Play/Image-music/ThangTuLaLoiNoiDoiCuaEm.jpg",
          },
          {
            name: "Tháng Mấy Em Nhớ Anh",
            singer: "Hà Anh Tuấn",
            path: "./Music-Play/Music/ThangMayEmNhoAnh-HaAnhTuan-6995531.mp3",
            image: "./Music-Play/Image-music/ThangMayEmNhoAnh.jpg",
          },
          {
            name: "Nàng Thơ",
            singer: "Hoàng Dũng",
            path: "./Music-Play/Music/NangTho-HoangDung-6413381.mp3",
            image: "./Music-Play/Image-music/NangTho.jpg",
          },
          {
            name: "Yêu Từ Đâu Mà Ra",
            singer: "LilZpoet",
            path: "./Music-Play/Music/YeuTuDauMaRaOrinnRemix-LilZpoet-6266627.mp3",
            image: "./Music-Play/Image-music/YeuTuDauMaRa.jpg",
          },
          {
            name: "2 Phút Hơn",
            singer: "PhaoWack",
            path: "./Music-Play/Music/2PhutHon-PhaoWack-6229151.mp3",
            image: "./Music-Play/Image-music/2PhutHon.jpg",
          },
          {
            name: "Nevada - Đi - Đi - Đi",
            singer: "Mashup",
            path: "./Music-Play/Music/Mashup-Nevada-x-Di-Di-Di-An.mp3",
            image: "./Music-Play/Image-music/NeVaDaDiDIDI.jpg",
          },
          {
            name: "Cùng Anh",
            singer: "VRT Mix",
            path: "./Music-Play/Music/CungAnh-NgocDolilHagiStee-5237527.mp3",
            image: "./Music-Play/Image-music/CungAnh.jpg",
          },

          {
            name: "Yêu Là Tha Thu",
            singer: "Only - C",
            path: "./Music-Play/Music/YeuLaThaThuEmChua18Ost-OnlyC-9213752.mp3",
            image: "./Music-Play/Image-music/YeuLaThaThu.jpg",
          },
          {
            name: "Phía Sau Một Cô Gái",
            singer: "Soobin Hoàng Sơn",
            path: "./Music-Play/Music/PhiaSauMotCoGai-SoobinHoangSon-4632323.mp3",
            image: "./Music-Play/Image-music/PhiaSauMotCoGai.jpg",
          },

          
          {
            name: "Ấn Nút Nhớ Thả Giấc Mơ",
            singer: "Sơn Tùng MTP",
            path: "./Music-Play/Music/AnNutNhoThaGiacMoRemix-SonTungMTPDJ-4090431.mp3",
            image: "./Music-Play/Image-music/AnNutNhoThaGiacMo.jpg",
          },
          {
            name: "Chạm Khẽ Tim Anh Một Chút Thôi",
            singer: "Noo Phước Thịnh",
            path: "./Music-Play/Music/ChamKheTimAnhMotChutThoi-NooPhuocThinh-5219031.mp3",
            image: "./Music-Play/Image-music/ChamKheTimAnhMotChutThoi.jpg",
          },
          {
            name: "Thuyền Quyên",
            singer: "Diệu Kiên",
            path: "./Music-Play/Music/ThuyenQuyen-DieuKien-7583420.mp3",
            image: "./Music-Play/Image-music/ThuyenQuyen.jpg",
          },
          {
            name: "Cố Giang Tình",
            singer: "X2X",
            path: "./Music-Play/Music/CoGiangTinh-X2X-6257264.mp3",
            image: "./Music-Play/Image-music/CoGiangTinh.jpg",
          },
          {
            name: "Thì Thôi",
            singer: "Reddy",
            path: "./Music-Play/Music/ThiThoi-Reddy-5461229.mp3",
            image: "./Music-Play/Image-music/ThgRoi.jpg",
          },
          {
            name: "Suýt Nữa Thì",
            singer: "Andiez",
            path: "./Music-Play/Music/SuytNuaThi-Andiez-5524784.mp3",
            image: "./Music-Play/Image-music/SuytNuaThi.jpg",
          },
          {
            name: "Là Anh",
            singer: "Phạm Lịch",
            path: "./Music-Play/Music/LaAnh.mp3",
            image: "./Music-Play/Image-music/LaAnh.jpg",
          },
          {
            name: "Một Đêm Say",
            singer: "Thinh Suy",
            path: "./Music-Play/Music/MotDemSay.mp3",
            image: "./Music-Play/Image-music/MotDemSay.jpg",
          },
        ],
        render: function () {
          if (this.songs.length === 0) {
            playlist.innerHTML = "<p>Không có bài hát.</p>";
            return;
          }

          const htmls = this.songs.map((song, index) => {
            return `
                      <div class="song ${
                        index === this.currentIndex ? "active" : ""
                      }" data-index="${index}">
                        <div
                          class="thumb"
                          style="background-image: url('${song.image}');"
                        ></div>
                        <div class="body">
                          <h3 class="title">${song.name}</h3>
                          <p class="author">${song.singer}</p>
                        </div>
                        <div class="option">
                          <i class="fas fa-ellipsis-h"></i>
                        </div>
                      </div>
                    `;
          });

          $(".playlist").innerHTML = htmls.join("");
        },
        defineProperties: function () {
          Object.defineProperties(this, {
            currentSong: {
              get: function () {
                return this.songs[this.currentIndex];
              },
            },
          });
        },

        loadCurrentSong: function () {
          header.textContent = this.currentSong.name;
          cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`;
          audio.src = this.currentSong.path;

          console.log(header, cdThumb, audio);
        },

        loadConfig: function() {
          this.isRandom = this.config.isRandom;
          this.isRepeat = this.config.isRepeat; // Sửa lại đây thành isRepeat
        },
        

        nextSong: function () {
          this.currentIndex++;
          // Kiểm tra nếu bài hát là bài cuối cùng thì sẽ quay về bài đầu tiên.
          if (this.currentIndex >= this.songs.length) {
            this.currentIndex = 0;
          }
          this.loadCurrentSong(); // Thêm từ khóa "this" ở đây để gọi đúng phạm vi
        },

        prevSong: function () {
          this.currentIndex--;
          // Kiểm tra nếu bài hát là bài cuối cùng thì sẽ quay về bài đầu tiên.
          if (this.currentIndex < 0) {
            this.currentIndex = this.songs.length - 1;
          }
          this.loadCurrentSong(); // Thêm từ khóa "this" ở đây để gọi đúng phạm vi
        },

        randomSong: function () {
          let newIndex;
          do {
            newIndex = Math.floor(Math.random() * this.songs.length);
          } while (newIndex === this.currentIndex); // Không trùng bài hát cũ.

          this.currentIndex = newIndex;
          this.loadCurrentSong();
        },

        //Xử lý phóng to thu nhỏ CD
        handleEvents: function () {
          const cdWidth = cd.offsetWidth;
          const _this = this;

          // Xử lý CD quay và dừng khi phát nhạc hoặc ngừng nhạc.
          const cdThumbAnimate = cd.animate(
            [
              {
                transform: "rotate(360deg)",
              },
            ],
            {
              duration: 10000, // 10 seconds
              iterations: Infinity, // loop (lặp lại vô hạn.)
            }
          );
          
          cdThumbAnimate.pause();
          document.onscroll = function () {
            const scrollTop =
              window.scrollY || document.documentElement.scrollTop;
            const newCdWidth = cdWidth - scrollTop;
            cd.style.width = newCdWidth > 0 ? newCdWidth + "px" : 0;
            cd.style.opacity = newCdWidth / cdWidth;
          };

          // Xử lý khi bấm vào phát nhạc.
          playBtn.onclick = function () {
            if (_this.isPlaying) {
              audio.pause();
            } else {
              audio.play();
            }
          };
          // Khi bài hát được phát.
          audio.onplay = function () {
            _this.isPlaying = true;
            player.classList.add("playing");
            cdThumbAnimate.play();
          };

          // Khi bài hát được dừng.
          audio.onpause = function () {
            _this.isPlaying = false;
            player.classList.remove("playing");
            cdThumbAnimate.pause();
          };

          // Khi tiến độ bài hát thay đổi theo thời time.
          audio.ontimeupdate = function () {
            const progressPercent = Math.floor(
              (audio.currentTime / audio.duration) * 100
            );
            progress.value = progressPercent;
          };

          // Xử lý khi tua bài hát.
          progress.onchange = function (e) {
            const seekTime = (audio.duration / 100) * e.target.value;
            audio.currentTime = seekTime;
          };

          // Xử lý khi chuyển bài hát.
          nextBtn.onclick = function () {
            if (_this.isRandom) {
              _this.randomSong();
            } else {
              _this.nextSong();
            }
            audio.play();
            _this.render();
            _this.scrollToActiveSong();
          };

          // Xử lý khi lùi thứ tự bài hát.
          prevBtn.onclick = function () {
            if (_this.isRandom) {
              _this.randomSong();
            } else {
              _this.prevSong(); // Thêm dấu ngoặc đơn sau tên hàm prevSong()
            }
            audio.play();
            _this.render();
            _this.scrollToActiveSong();
          };

          // Xử lý khi random:
          randomBtn.onclick = function (e) {
            _this.isRandom = !_this.isRandom;
            _this.setConfig("isRandom", _this.isRandom);
            randomBtn.classList.toggle("active", _this.isRandom);
          };

          //Xử lý next bài hát khi audio ended
          audio.onended = function () {
            if (_this.isRepeat) {
              // Xử lý lặp lại
              audio.play(); // Xử lý lặp lại
            } else {
              nextBtn.click();
            }
          };

          //Xử lý khi click vào từng iteam của bài hát .
          playlist.onclick = function (e) {
            const SongNote = e.target.closest(".song:not(.active)");
            if (SongNote || e.target.closest(".option")) {
              // dòng này có nghĩa là tìm con của class .song nếu không tìm được sẽ trả về song. trừ class active ra.

              //Xử lý khi click vào song optonee
              if (SongNote) {
                _this.currentIndex = Number(SongNote.dataset.index);
                _this.loadCurrentSong();
                _this.render();
                audio.play();
              }
            }
          };

          // Xử lý khi bấm nút repeat(lặp lại)
          repeatBtn.onclick = function () {
            _this.isRepeat = !_this.isRepeat;
            _this.setConfig("isRepeat", _this.isRepeat);
            repeatBtn.classList.toggle("active", _this.isRepeat);
          };
        },

        //Xử lý scroll (không biết nữa :D)
        scrollToActiveSong: function () {
          setTimeout(() => {
            $(".song.active").scrollIntoView({
              behavior: "smooth",
              block: "nearest",
            });
          }, 500);
        },

        start: function () {
          
          // Gán cấu hình từ config vào ứng dụng
          this.loadConfig()
          // Định nghĩa các thuộc tính cho object
          this.defineProperties();

          // Lắng nghe / xử lý các sự kiện (DOM Event)
          this.handleEvents();

          // Tải thông tin bài hát đầu tiên vào UI khi chạy ứng dụng.
          this.loadCurrentSong();

          //Render playlist
          this.render();
        },
      };
      app.start();