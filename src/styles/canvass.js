export var canvasForMouse = function(canvas, cw, ch){
    
    const particlesArray = [];
    //let hue = 0;
    var _this = this;
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');    
    this.cw = window.innerWidth;
    this.ch = window.innerHeight;
    //
    const htmlElement = document.documentElement;
    const observer = new MutationObserver(() => {
        currentTheme = htmlElement.getAttribute('data-theme');
        const newColor = currentTheme === 'dark' ? '#fff' : '#000';
        for(const p of particlesArray) p.color = newColor;
    });

    observer.observe(htmlElement, {
        attributes: true,
        attributeFilter: ['data-theme'],
    });
    //
    window.addEventListener('resize', function(){
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    const mouse = {
        x: null,
        y: null,
    }

    this.canvas.addEventListener('click', function(event){
        mouse.x = event.x;
        mouse.y = event.y;
        for(let i = 0; i < 25; i++){
            particlesArray.push(new Particle());
        };
        
    });

    this.canvas.addEventListener('mousemove', function(event){
        mouse.x = event.x;
        mouse.y = event.y;
        for(let i = 0; i < 2; i++){
            particlesArray.push(new Particle());
        };
    });

    class Particle {
        constructor(){
            this.x = mouse.x;
            this.y = mouse.y;
            //this.x = Math.random() * canvas.width;
            //this.y = Math.random() * canvas.height;
            this.size = Math.random() * 3 + 1;
            this.speedX = Math.random() * 3 - 1.5;
            this.speedY = Math.random() * 3 - 1.5;
            //this.color = 'hsl(' + hue + ', 100%, 50%)';
            const theme = document.documentElement.getAttribute('data-theme');
            this.color = theme === 'dark' ? '#fff' : '#000';
        }
        update(){
            this.x += this.speedX;
            this.y += this.speedY;
            if(this.size > 0.2) this.size -= 0.1;
        }
        draw(){
            _this.ctx.fillStyle = this.color;
            _this.ctx.beginPath();
            _this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            _this.ctx.fill();
        }
    }

    function handleParticle(){
        for(let i = 0; i < particlesArray.length; i++){
            particlesArray[i].update();
            particlesArray[i].draw();
            for(let j = i; j < particlesArray.length; j++){
                const dx = particlesArray[i].x - particlesArray[j].x;
                const dy = particlesArray[i].y - particlesArray[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if(distance < 100){
                    _this.ctx.beginPath();
                    _this.ctx.strokeStyle = particlesArray[i].color;
                    _this.ctx.lineWidth = particlesArray[i].size/5;
                    _this.ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
                    _this.ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
                    _this.ctx.stroke();
                    _this.ctx.closePath();
                }
            }
            if(particlesArray[i].size < 0.3){
                particlesArray.splice(i, 1)
                i--;
            }
             
        }
    }
    
    function animate(){
        _this.ctx.clearRect(0, 0, _this.canvas.width, _this.canvas.height);
        //_this.ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
        //_this.ctx.fillRect(0, 0, canvas.width, canvas.height);
        handleParticle();
        //hue += 0.5;
        requestAnimationFrame(animate);
    }
    animate()

    
};