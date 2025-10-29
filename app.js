// 🌍 다중언어 지원 시스템
        const translations = {
            'en': {
                // UI 요소들
                'app_title': "Ekman Transport Visualizer",
                'language_select': "🌐 Language Selection",
                'param_settings': "🎛️ Parameter Settings",
                'wind_speed': "🌬️ Wind Speed (m/s)",
                'wind_direction': "🧭 Wind Direction (°)",
                'latitude': "🌍 Latitude (°)",
                'depth': "🌊 Depth (m)",
                'vis_type': "📊 Visualization Type",
                'vis_3d': "🔮 3D",
                'vis_2d': "📈 2D",
                'preset_settings': "⚡ Preset Settings",
                'preset_normal': "🌤️ Normal",
                'preset_strong': "💨 Strong Wind",
                'preset_typhoon': "🌪️ Typhoon",
                'location_select': "🗺️ Location Selection",
                'calc_button': "🔄 Calculate & Visualize",
                'export_button': "💾 Export",
                'results_title': "📋 Calculation Results",
                'wind_stress': "💨 Wind Stress:",
                'ekman_depth': "📏 Ekman Depth:",
                'total_transport': "🌊 Total Transport:",
                'energy_transfer': "⚡ Energy Transfer:",
                'calc_message': "Click Calculate & Visualize button",
                
                // 지역 선택
                'loc_custom': "🎯 Custom Settings",
                'loc_los_angeles': "🇺🇸 Los Angeles",
                'loc_busan': "🇰🇷 Busan",
                'loc_north_pacific': "🌊 North Pacific",
                'loc_north_atlantic': "🌊 North Atlantic", 
                'loc_southern_ocean': "🧊 Southern Ocean",
                'loc_equator': "🔆 Equator",
                
                // 차트 제목
                'chart_title_3d': "�� 3D Ekman Transport Visualization",
                'chart_title_2d': "🌊 Ekman Transport Visualization",
                'chart_title_mobile': "🌊 Ekman Transport Visualization",
                
                // 단위
                'unit_ms': "m/s",
                'unit_degree': "°",
                'unit_meter': "m",
                'unit_wind_stress': "mN/m²",
                'unit_transport': "m³/s",
                'unit_energy': "mW/m²",
                'footer_project_title': "Ekman Transport Visualizer",
                'footer_features_title': "Features",
                'footer_tech_title': "Technical Info",
                'footer_contact_title': "Contact & Support",
                'footer_project_desc': "A professional tool for visualizing oceanographic phenomena. Analyzes wind-ocean current interactions based on Ekman transport theory.",
                'footer_feature1': "Normal Wind Condition Simulation",
                'footer_feature2': "Strong Wind Analysis",
                'footer_feature3': "Typhoon Condition Modeling",
                'footer_feature4': "3D Visualization",
                'footer_feature5': "2D Analysis Charts",
                'footer_feature6': "Export Results",
                'footer_tech1': "Ekman Transport Theory",
                'footer_tech2': "Coriolis Effect",
                'footer_tech3': "Ekman Spiral",
                'footer_tech4': "Wind Stress Calculation",
                'footer_tech5': "Vertical Turbulence Modeling",
                'footer_contact1': "pistolinkr@icloud.com",
                'footer_contact2': "https://github.com/pistolinkr",
                'footer_contact3': "Oceanography Research Community",
                'footer_contact4': "Tech Support: 24/7",
                'solution_title': "Solutions & Usage Guide",
                'solution_quick_start': "Quick Start Guide",
                'solution_advanced_usage': "Advanced Usage",
                'solution_troubleshooting': "Troubleshooting",
                'solution_best_practices': "Best Practices",
                'solution_case_studies': "Case Studies",
                'solution_quick_start_title': "Quick Start Guide",
                'solution_quick_start_desc': "Step-by-step guide for first-time users of the Ekman Transport Visualization tool.",
                'solution_step1_title': "Step 1: Basic Settings",
                'solution_step2_title': "Step 2: Visualization Type Selection",
                'solution_step3_title': "Step 3: Using Presets",
                'solution_step4_title': "Step 4: Calculation and Results",
                'solution_advanced_title': "Advanced Usage",
                'solution_advanced_desc': "Methods for utilizing advanced features for professional oceanographic analysis.",
                'solution_trouble_title': "Troubleshooting Guide",
                'solution_trouble_desc': "Common problems and their solutions.",
                'solution_best_title': "Best Practices",
                'solution_best_desc': "Best practices for accurate and meaningful analysis.",
                'solution_case_title': "Case Studies",
                'solution_case_desc': "Concrete examples that can be utilized in actual oceanographic research."
            },
            'ko': {
                // UI 요소들
                'app_title': "에크만 수송 시각화",
                'language_select': "🌐 언어 선택",
                'param_settings': "🎛️ 파라미터 설정",
                'wind_speed': "🌬️ 바람 속도 (m/s)",
                'wind_direction': "🧭 바람 방향 (°)",
                'latitude': "🌍 위도 (°)",
                'depth': "🌊 깊이 (m)",
                'vis_type': "📊 시각화 타입",
                'vis_3d': "🔮 3D",
                'vis_2d': "📈 2D",
                'preset_settings': "⚡ 사전 설정",
                'preset_normal': "🌤️ 일반",
                'preset_strong': "💨 강풍",
                'preset_typhoon': "🌪️ 태풍",
                'location_select': "🗺️ 지역 선택",
                'calc_button': "🔄 계산 및 시각화",
                'export_button': "💾 내보내기",
                'results_title': "📋 계산 결과",
                'wind_stress': "💨 바람 응력:",
                'ekman_depth': "📏 에크만 깊이:",
                'total_transport': "🌊 총 수송량:",
                'energy_transfer': "⚡ 에너지 전달률:",
                'calc_message': "계산 및 시각화 버튼을 클릭하세요",
                
                // 지역 선택
                'loc_custom': "🎯 사용자 설정",
                'loc_los_angeles': "🇺🇸 로스앤젤레스",
                'loc_busan': "🇰🇷 부산",
                'loc_north_pacific': "🌊 북태평양",
                'loc_north_atlantic': "🌊 북대서양",
                'loc_southern_ocean': "🧊 남극해",
                'loc_equator': "🔆 적도",
                
                // 차트 제목
                'chart_title_3d': "🌊 3D 에크만 수송 시각화",
                'chart_title_2d': "🌊 에크만 수송 시각화",
                'chart_title_mobile': "🌊 에크만 수송 시각화",
                
                // 단위
                'unit_ms': "m/s",
                'unit_degree': "°",
                'unit_meter': "m",
                'unit_wind_stress': "mN/m²",
                'unit_transport': "m³/s",
                'unit_energy': "mW/m²",
                'footer_project_title': "에크만 수송 시각화",
                'footer_features_title': "기능",
                'footer_tech_title': "기술 정보",
                'footer_contact_title': "연락처 및 지원",
                'footer_project_desc': "해양학적 현상을 시각화하는 전문 도구입니다. 에크만 수송 이론을 기반으로 바람과 해류의 상호작용을 분석합니다.",
                'footer_feature1': "일반 바람 조건 시뮬레이션",
                'footer_feature2': "강풍 조건 분석",
                'footer_feature3': "태풍 조건 모델링",
                'footer_feature4': "3D 시각화",
                'footer_feature5': "2D 분석 차트",
                'footer_feature6': "결과 내보내기",
                'footer_tech1': "에크만 수송 이론",
                'footer_tech2': "코리올리 효과",
                'footer_tech3': "에크만 나선",
                'footer_tech4': "바람 응력 계산",
                'footer_tech5': "수직 난류 모델링",
                'footer_contact1': "pistolinkr@icloud.com",
                'footer_contact2': "https://github.com/pistolinkr",
                'footer_contact3': "해양학 연구 커뮤니티",
                'footer_contact4': "기술 지원: 24/7",
                'solution_title': "솔루션 및 사용법 가이드",
                'solution_quick_start': "빠른 시작 가이드",
                'solution_advanced_usage': "고급 사용법",
                'solution_troubleshooting': "문제 해결",
                'solution_best_practices': "모범 사례",
                'solution_case_studies': "사례 연구",
                'solution_quick_start_title': "빠른 시작 가이드",
                'solution_quick_start_desc': "에크만 수송 시각화 도구를 처음 사용하시는 분들을 위한 단계별 가이드입니다.",
                'solution_step1_title': "1단계: 기본 설정",
                'solution_step2_title': "2단계: 시각화 타입 선택",
                'solution_step3_title': "3단계: 사전 설정 활용",
                'solution_step4_title': "4단계: 계산 및 결과 확인",
                'solution_advanced_title': "고급 사용법",
                'solution_advanced_desc': "전문적인 해양학 분석을 위한 고급 기능들을 활용하는 방법입니다.",
                'solution_trouble_title': "문제 해결 가이드",
                'solution_trouble_desc': "자주 발생하는 문제들과 해결 방법을 안내합니다.",
                'solution_best_title': "모범 사례",
                'solution_best_desc': "정확하고 의미 있는 분석을 위한 모범 사례들을 소개합니다.",
                'solution_case_title': "사례 연구",
                'solution_case_desc': "실제 해양학 연구에서 활용할 수 있는 구체적인 사례들을 소개합니다."
            },
            'zh': {
                // UI 요소들
                'app_title': "埃克曼输运可视化",
                'language_select': "🌐 语言选择",
                'param_settings': "🎛️ 参数设置",
                'wind_speed': "🌬️ 风速 (m/s)",
                'wind_direction': "🧭 风向 (°)",
                'latitude': "🌍 纬度 (°)",
                'depth': "🌊 深度 (m)",
                'vis_type': "📊 可视化类型",
                'vis_3d': "🔮 3D",
                'vis_2d': "📈 2D",
                'preset_settings': "⚡ 预设设置",
                'preset_normal': "🌤️ 正常",
                'preset_strong': "💨 强风",
                'preset_typhoon': "🌪️ 台风",
                'location_select': "🗺️ 位置选择",
                'calc_button': "🔄 计算与可视化",
                'export_button': "💾 导出",
                'results_title': "📋 计算结果",
                'wind_stress': "💨 风应力:",
                'ekman_depth': "📏 埃克曼深度:",
                'total_transport': "🌊 总输运量:",
                'energy_transfer': "⚡ 能量传输率:",
                'calc_message': "点击计算与可视化按钮",
                
                // 地区选择
                'loc_custom': "🎯 自定义设置",
                'loc_los_angeles': "🇺🇸 洛杉矶",
                'loc_busan': "🇰🇷 釜山",
                'loc_north_pacific': "🌊 北太平洋",
                'loc_north_atlantic': "🌊 北大西洋",
                'loc_southern_ocean': "🧊 南极海",
                'loc_equator': "🔆 赤道",
                
                // 图表标题
                'chart_title_3d': "🌊 3D 埃克曼输运可视化",
                'chart_title_2d': "🌊 埃克曼输运可视化",
                'chart_title_mobile': "🌊 埃克曼输运可视化",
                
                // 单位
                'unit_ms': "m/s",
                'unit_degree': "°",
                'unit_meter': "m",
                'unit_wind_stress': "mN/m²",
                'unit_transport': "m³/s",
                'unit_energy': "mW/m²",
                'footer_project_title': "埃克曼输运可视化",
                'footer_features_title': "功能",
                'footer_tech_title': "技术信息",
                'footer_contact_title': "联系与支持",
                'footer_project_desc': "海洋现象可视化专业工具。基于埃克曼输运理论分析风与海流的相互作用。",
                'footer_feature1': "正常风况模拟",
                'footer_feature2': "强风分析",
                'footer_feature3': "台风条件建模",
                'footer_feature4': "3D可视化",
                'footer_feature5': "2D分析图表",
                'footer_feature6': "导出结果",
                'footer_tech1': "埃克曼输运理论",
                'footer_tech2': "科里奥利效应",
                'footer_tech3': "埃克曼螺旋",
                'footer_tech4': "风应力计算",
                'footer_tech5': "垂直湍流建模",
                'footer_contact1': "pistolinkr@icloud.com",
                'footer_contact2': "https://github.com/pistolinkr",
                'footer_contact3': "海洋学研究社区",
                'footer_contact4': "技术支持: 24/7",
                'solution_title': "解决方案和使用指南",
                'solution_quick_start': "快速入门指南",
                'solution_advanced_usage': "高级使用方法",
                'solution_troubleshooting': "故障排除",
                'solution_best_practices': "最佳实践",
                'solution_case_studies': "案例研究"
            },
            'ja': {
                // UI 요소들
                'app_title': "エクマン輸送可視化",
                'language_select': "🌐 言語選択",
                'param_settings': "🎛️ パラメータ設定",
                'wind_speed': "🌬️ 風速 (m/s)",
                'wind_direction': "🧭 風向 (°)",
                'latitude': "🌍 緯度 (°)",
                'depth': "🌊 深度 (m)",
                'vis_type': "📊 可視化タイプ",
                'vis_3d': "🔮 3D",
                'vis_2d': "📈 2D",
                'preset_settings': "⚡ プリセット設定",
                'preset_normal': "🌤️ 通常",
                'preset_strong': "💨 強風",
                'preset_typhoon': "🌪️ 台風",
                'location_select': "🗺️ 場所選択",
                'calc_button': "🔄 計算と可視化",
                'export_button': "💾 エクスポート",
                'results_title': "📋 計算結果",
                'wind_stress': "💨 風応力:",
                'ekman_depth': "📏 エクマン深度:",
                'total_transport': "🌊 総輸送量:",
                'energy_transfer': "⚡ エネルギー伝達率:",
                'calc_message': "計算と可視化ボタンをクリックしてください",
                
                // 地域選択
                'loc_custom': "🎯 カスタム設定",
                'loc_los_angeles': "🇺🇸 ロサンゼルス",
                'loc_busan': "🇰🇷 釜山",
                'loc_north_pacific': "🌊 北太平洋",
                'loc_north_atlantic': "🌊 北大西洋",
                'loc_southern_ocean': "🧊 南極海",
                'loc_equator': "🔆 赤道",
                
                // チャートタイトル
                'chart_title_3d': "🌊 3D エクマン輸送可視化",
                'chart_title_2d': "🌊 エクマン輸送可視化",
                'chart_title_mobile': "🌊 エクマン輸送可視化",
                
                // 単位
                'unit_ms': "m/s",
                'unit_degree': "°",
                'unit_meter': "m",
                'unit_wind_stress': "mN/m²",
                'unit_transport': "m³/s",
                'unit_energy': "mW/m²",
                'footer_project_title': "エクマン輸送可視化",
                'footer_features_title': "機能",
                'footer_tech_title': "技術情報",
                'footer_contact_title': "お問い合わせとサポート",
                'footer_project_desc': "海洋現象を可視化する専門ツールです。エクマン輸送理論に基づいて風と海流の相互作用を分析します。",
                'footer_feature1': "通常の風条件シミュレーション",
                'footer_feature2': "強風分析",
                'footer_feature3': "台風条件モデリング",
                'footer_feature4': "3D可視化",
                'footer_feature5': "2D分析チャート",
                'footer_feature6': "結果エクスポート",
                'footer_tech1': "エクマン輸送理論",
                'footer_tech2': "コリオリ効果",
                'footer_tech3': "エクマン螺旋",
                'footer_tech4': "風応力計算",
                'footer_tech5': "鉛直乱流モデリング",
                'footer_contact1': "pistolinkr@icloud.com",
                'footer_contact2': "https://github.com/pistolinkr",
                'footer_contact3': "海洋学研究コミュニティ",
                'footer_contact4': "技術サポート: 24/7",
                'solution_title': "ソリューションと使用ガイド",
                'solution_quick_start': "クイックスタートガイド",
                'solution_advanced_usage': "高度な使用方法",
                'solution_troubleshooting': "トラブルシューティング",
                'solution_best_practices': "ベストプラクティス",
                'solution_case_studies': "ケーススタディ"
            },
            'es': {
                // UI 요소들
                'app_title': "Visualizador de Transporte de Ekman",
                'language_select': "🌐 Selección de Idioma",
                'param_settings': "🎛️ Configuración de Parámetros",
                'wind_speed': "🌬️ Velocidad del Viento (m/s)",
                'wind_direction': "🧭 Dirección del Viento (°)",
                'latitude': "🌍 Latitud (°)",
                'depth': "🌊 Profundidad (m)",
                'vis_type': "📊 Tipo de Visualización",
                'vis_3d': "🔮 3D",
                'vis_2d': "📈 2D",
                'preset_settings': "⚡ Configuración Predefinida",
                'preset_normal': "🌤️ Normal",
                'preset_strong': "💨 Viento Fuerte",
                'preset_typhoon': "🌪️ Tifón",
                'location_select': "🗺️ Selección de Ubicación",
                'calc_button': "🔄 Calcular y Visualizar",
                'export_button': "💾 Exportar",
                'results_title': "📋 Resultados del Cálculo",
                'wind_stress': "💨 Esfuerzo del Viento:",
                'ekman_depth': "📏 Profundidad de Ekman:",
                'total_transport': "🌊 Transporte Total:",
                'energy_transfer': "⚡ Transferencia de Energía:",
                'calc_message': "Haga clic en Calcular y Visualizar",
                
                // Selección de región
                'loc_custom': "🎯 Configuración Personalizada",
                'loc_los_angeles': "🇺🇸 Los Ángeles",
                'loc_busan': "🇰🇷 Busan",
                'loc_north_pacific': "🌊 Pacífico Norte",
                'loc_north_atlantic': "🌊 Atlántico Norte",
                'loc_southern_ocean': "🧊 Océano Austral",
                'loc_equator': "🔆 Ecuador",
                
                // Títulos de gráficos
                'chart_title_3d': "🌊 Visualización 3D del Transporte de Ekman",
                'chart_title_2d': "🌊 Visualización del Transporte de Ekman",
                'chart_title_mobile': "🌊 Visualización del Transporte de Ekman",
                
                // Unidades
                'unit_ms': "m/s",
                'unit_degree': "°",
                'unit_meter': "m",
                'unit_wind_stress': "mN/m²",
                'unit_transport': "m³/s",
                'unit_energy': "mW/m²",
                'footer_project_title': "Visualizador de Transporte de Ekman",
                'footer_features_title': "Características",
                'footer_tech_title': "Información Técnica",
                'footer_contact_title': "Contacto y Soporte",
                'footer_project_desc': "Herramienta profesional para visualizar fenómenos oceanográficos. Analiza las interacciones viento-corriente oceánica basadas en la teoría del transporte de Ekman.",
                'footer_feature1': "Simulación de Condiciones Normales de Viento",
                'footer_feature2': "Análisis de Viento Fuerte",
                'footer_feature3': "Modelado de Condiciones de Tifón",
                'footer_feature4': "Visualización 3D",
                'footer_feature5': "Gráficos de Análisis 2D",
                'footer_feature6': "Exportar Resultados",
                'footer_tech1': "Teoría del Transporte de Ekman",
                'footer_tech2': "Efecto Coriolis",
                'footer_tech3': "Espiral de Ekman",
                'footer_tech4': "Cálculo del Esfuerzo del Viento",
                'footer_tech5': "Modelado de Turbulencia Vertical",
                'footer_contact1': "support@ekman-visualizer.com",
                'footer_contact2': "https://ekman-visualizer.github.io",
                'footer_contact3': "Comunidad de Investigación Oceanográfica",
                'footer_contact4': "Soporte Técnico: 24/7",
                'solution_title': "Soluciones y Guía de Uso",
                'solution_quick_start': "Guía de Inicio Rápido",
                'solution_advanced_usage': "Uso Avanzado",
                'solution_troubleshooting': "Solución de Problemas",
                'solution_best_practices': "Mejores Prácticas",
                'solution_case_studies': "Estudios de Caso"
            },
            'ru': {
                // UI 요소들
                'app_title': "Визуализатор Переноса Экмана",
                'language_select': "🌐 Выбор Языка",
                'param_settings': "🎛️ Настройки Параметров",
                'wind_speed': "🌬️ Скорость Ветра (м/с)",
                'wind_direction': "🧭 Направление Ветра (°)",
                'latitude': "🌍 Широта (°)",
                'depth': "🌊 Глубина (м)",
                'vis_type': "📊 Тип Визуализации",
                'vis_3d': "🔮 3D",
                'vis_2d': "📈 2D",
                'preset_settings': "⚡ Предустановки",
                'preset_normal': "🌤️ Обычно",
                'preset_strong': "💨 Сильный Ветер",
                'preset_typhoon': "🌪️ Тайфун",
                'location_select': "🗺️ Выбор Местоположения",
                'calc_button': "🔄 Рассчитать и Визуализировать",
                'export_button': "💾 Экспорт",
                'results_title': "📋 Результаты Расчета",
                'wind_stress': "💨 Напряжение Ветра:",
                'ekman_depth': "📏 Глубина Экмана:",
                'total_transport': "🌊 Общий Перенос:",
                'energy_transfer': "⚡ Передача Энергии:",
                'calc_message': "Нажмите Рассчитать и Визуализировать",
                
                // Выбор региона
                'loc_custom': "🎯 Пользовательские Настройки",
                'loc_los_angeles': "🇺🇸 Лос-Анджелес",
                'loc_busan': "🇰🇷 Пусан",
                'loc_north_pacific': "🌊 Северная часть Тихого океана",
                'loc_north_atlantic': "🌊 Северная Атлантика",
                'loc_southern_ocean': "🧊 Южный океан",
                'loc_equator': "🔆 Экватор",
                
                // Заголовки графиков
                'chart_title_3d': "🌊 3D Визуализация Переноса Экмана",
                'chart_title_2d': "🌊 Визуализация Переноса Экмана",
                'chart_title_mobile': "🌊 Визуализация Переноса Экмана",
                
                // Единицы измерения
                'unit_ms': "м/с",
                'unit_degree': "°",
                'unit_meter': "м",
                'unit_wind_stress': "мН/м²",
                'unit_transport': "м³/с",
                'unit_energy': "мВт/м²",
                'footer_project_title': "Визуализатор Переноса Экмана",
                'footer_features_title': "Функции",
                'footer_tech_title': "Техническая информация",
                'footer_contact_title': "Контакты и поддержка",
                'footer_project_desc': "Профессиональный инструмент для визуализации океанографических явлений. Анализирует взаимодействие ветра и океанических течений на основе теории переноса Экмана.",
                'footer_feature1': "Симуляция нормальных ветровых условий",
                'footer_feature2': "Анализ сильного ветра",
                'footer_feature3': "Моделирование условий тайфуна",
                'footer_feature4': "3D Визуализация",
                'footer_feature5': "2D Аналитические графики",
                'footer_feature6': "Экспорт результатов",
                'footer_tech1': "Теория переноса Экмана",
                'footer_tech2': "Эффект Кориолиса",
                'footer_tech3': "Спираль Экмана",
                'footer_tech4': "Расчет напряжения ветра",
                'footer_tech5': "Моделирование вертикальной турбулентности",
                'footer_contact1': "pistolinkr@icloud.com",
                'footer_contact2': "https://github.com/pistolinkr",
                'footer_contact3': "Сообщество исследователей океанографии",
                'footer_contact4': "Техническая поддержка: 24/7",
                'solution_title': "Решения и руководство по использованию",
                'solution_quick_start': "Быстрый старт",
                'solution_advanced_usage': "Продвинутое использование",
                'solution_troubleshooting': "Устранение неполадок",
                'solution_best_practices': "Лучшие практики",
                'solution_case_studies': "Примеры использования"
            }
        };
        
        // 현재 언어 설정 (기본값: 한국어)
        let currentLanguage = localStorage.getItem('ekman_language') || 'ko';
        
        // 번역 함수
        function t(key) {
            return translations[currentLanguage][key] || translations['en'][key] || key;
        }
        
        // UI 텍스트 업데이트 함수
        function updateUITexts() {
            // 제목 바
            document.querySelector('.title-bar').textContent = t('app_title');
            
            // 푸터 텍스트 업데이트
            updateFooterTexts();
            
            // 모바일 메뉴 제목 (간단하게 제어판으로 통일)
            const mobileMenuTitle = currentLanguage === 'ko' ? '⚙️ 제어판' :
                                   currentLanguage === 'zh' ? '⚙️ 控制面板' :
                                   currentLanguage === 'ja' ? '⚙️ コントロールパネル' :
                                   currentLanguage === 'es' ? '⚙️ Panel de Control' :
                                   currentLanguage === 'ru' ? '⚙️ Панель Управления' :
                                   '⚙️ Control Panel';
            document.querySelector('.mobile-menu-title').textContent = mobileMenuTitle;
            
            // 라벨프레임 제목들
            document.querySelectorAll('.labelframe-title').forEach((element, index) => {
                const titles = [
                    'language_select',
                    'param_settings', 
                    'vis_type',
                    'preset_settings',
                    'location_select',
                    '', // 버튼 그룹
                    'results_title'
                ];
                if (titles[index]) {
                    element.textContent = t(titles[index]);
                }
            });
            
            // 슬라이더 라벨들
            document.querySelector('label[for="wind_speed"]').textContent = t('wind_speed') + ':';
            document.querySelector('label[for="wind_direction"]').textContent = t('wind_direction') + ':';
            document.querySelector('label[for="latitude"]').textContent = t('latitude') + ':';
            document.querySelector('label[for="depth"]').textContent = t('depth') + ':';
            
            // 라디오 버튼 라벨들
            document.querySelector('label[for="vis_3d"]').textContent = t('vis_3d');
            document.querySelector('label[for="vis_2d"]').textContent = t('vis_2d');
            
            // 버튼들
            document.querySelectorAll('.tk-button').forEach(button => {
                const text = button.textContent.trim();
                if (text.includes('일반') || text.includes('Normal') || text.includes('正常') || text.includes('通常') || text.includes('Обычно') || text.includes('🌤️')) {
                    button.textContent = t('preset_normal');
                } else if (text.includes('강풍') || text.includes('Strong Wind') || text.includes('强风') || text.includes('強風') || text.includes('Viento Fuerte') || text.includes('Сильный Ветер') || text.includes('💨')) {
                    button.textContent = t('preset_strong');
                } else if (text.includes('태풍') || text.includes('Typhoon') || text.includes('台风') || text.includes('台風') || text.includes('Tifón') || text.includes('Тайфун') || text.includes('🌪️')) {
                    button.textContent = t('preset_typhoon');
                } else if (text.includes('계산') || text.includes('Calculate') || text.includes('计算') || text.includes('計算') || text.includes('Calcular') || text.includes('Рассчитать') || text.includes('🔄')) {
                    button.textContent = t('calc_button');
                } else if (text.includes('내보내기') || text.includes('Export') || text.includes('导出') || text.includes('エクスポート') || text.includes('Exportar') || text.includes('Экспорт') || text.includes('💾')) {
                    button.textContent = t('export_button');
                }
            });
            
            // 결과 라벨들
            document.querySelectorAll('.result-label').forEach((element, index) => {
                const labels = ['wind_stress', 'ekman_depth', 'total_transport', 'energy_transfer'];
                if (labels[index]) {
                    element.textContent = t(labels[index]);
                }
            });
            
            // 지역 선택 옵션들
            const locationOptions = document.querySelectorAll('#location option');
            const locationKeys = ['loc_custom', 'loc_los_angeles', 'loc_busan', 'loc_north_pacific', 'loc_north_atlantic', 'loc_southern_ocean', 'loc_equator'];
            locationOptions.forEach((option, index) => {
                if (locationKeys[index]) {
                    option.textContent = t(locationKeys[index]);
                }
            });
            
            // 플롯 영역 기본 메시지
            const plotMessage = document.querySelector('#plot-area > div > p');
            if (plotMessage) {
                plotMessage.textContent = t('calc_message');
            }
            
            console.log(`🌍 ${currentLanguage === 'ko' ? '언어가' :
                              currentLanguage === 'zh' ? '语言已切换为' :
                              currentLanguage === 'ja' ? '言語が' :
                              currentLanguage === 'es' ? 'Idioma cambiado a' :
                              currentLanguage === 'ru' ? 'Язык изменен на' :
                              'Language changed to'} ${currentLanguage}${currentLanguage === 'ko' ? '로 변경되었습니다.' :
                                                                                                      currentLanguage === 'zh' ? '' :
                                                                                                      currentLanguage === 'ja' ? 'に変更されました。' :
                                                                                                      currentLanguage === 'es' ? '' :
                                                                                                      currentLanguage === 'ru' ? '' :
                                                                                                      ''}`);
        }
        
        // 푸터 텍스트 업데이트 함수
        function updateFooterTexts() {
            const footer = document.querySelector('.footer');
            if (!footer) return;
            // translations에 푸터 관련 텍스트 추가
            const footerT = translations[currentLanguage] || translations['en'];
            // 섹션 제목
            const sectionTitles = footer.querySelectorAll('.footer-section h3');
            if (sectionTitles.length >= 4) {
                sectionTitles[0].innerHTML = `🌊 ${footerT['footer_project_title'] || 'Ekman Transport Visualizer'}`;
                sectionTitles[1].innerHTML = `⚡ ${footerT['footer_features_title'] || 'Features'}`;
                sectionTitles[2].innerHTML = `🔬 ${footerT['footer_tech_title'] || 'Technical Info'}`;
                sectionTitles[3].innerHTML = `📞 ${footerT['footer_contact_title'] || 'Contact & Support'}`;
            }
            // 프로젝트 설명
            const projectDesc = footer.querySelector('.footer-section p');
            if (projectDesc) {
                projectDesc.textContent = footerT['footer_project_desc'] || 'A professional tool for visualizing oceanographic phenomena. Analyzes wind-ocean current interactions based on Ekman transport theory.';
            }
            // 주요 기능
            const featureLinks = footer.querySelectorAll('.footer-section:nth-child(2) .footer-links a');
            const featureTexts = [
                footerT['footer_feature1'] || 'Normal Wind Condition Simulation',
                footerT['footer_feature2'] || 'Strong Wind Analysis',
                footerT['footer_feature3'] || 'Typhoon Condition Modeling',
                footerT['footer_feature4'] || '3D Visualization',
                footerT['footer_feature5'] || '2D Analysis Charts',
                footerT['footer_feature6'] || 'Export Results'
            ];
            featureLinks.forEach((link, i) => { if (featureTexts[i]) link.textContent = featureTexts[i]; });
            // 기술 정보
            const techLinks = footer.querySelectorAll('.footer-section:nth-child(3) .footer-links a');
            const techTexts = [
                footerT['footer_tech1'] || 'Ekman Transport Theory',
                footerT['footer_tech2'] || 'Coriolis Effect',
                footerT['footer_tech3'] || 'Ekman Spiral',
                footerT['footer_tech4'] || 'Wind Stress Calculation',
                footerT['footer_tech5'] || 'Vertical Turbulence Modeling'
            ];
            techLinks.forEach((link, i) => { if (techTexts[i]) link.textContent = techTexts[i]; });
            // 연락처
            const contactItems = footer.querySelectorAll('.footer-contact .contact-item span');
            const contactTexts = [
                footerT['footer_contact1'] || 'support@ekman-visualizer.com',
                footerT['footer_contact2'] || 'https://ekman-visualizer.github.io',
                footerT['footer_contact3'] || 'Oceanography Research Community',
                footerT['footer_contact4'] || 'Tech Support: 24/7'
            ];
            contactItems.forEach((span, i) => {
                if (contactTexts[i]) {
                    if (i === 0) {
                        // 이메일 하이퍼링크
                        const email = contactTexts[i];
                        span.innerHTML = `<a href=\"mailto:${email}\">${email}</a>`;
                    } else if (i === 1) {
                        // 깃허브 하이퍼링크
                        const url = contactTexts[i];
                        span.innerHTML = `<a href=\"${url}\" target=\"_blank\" rel=\"noopener\">${url}</a>`;
                    } else if (i === 2) {
                        // 해양학 연구 커뮤니티 하이퍼링크
                        const communityText = contactTexts[i];
                        span.innerHTML = `<a href=\"https://www.ksocean.or.kr/community/board.asp?boardID=1\" target=\"_blank\" rel=\"noopener\">${communityText}</a>`;
                    } else {
                        span.textContent = contactTexts[i];
                    }
                }
            });
            
            // 솔루션 탭 링크들 업데이트
            const solutionLinks = footer.querySelectorAll('.footer-section:nth-child(4) .footer-links a');
            const solutionTexts = [
                footerT['solution_quick_start'] || 'Quick Start Guide',
                footerT['solution_advanced_usage'] || 'Advanced Usage',
                footerT['solution_troubleshooting'] || 'Troubleshooting',
                footerT['solution_best_practices'] || 'Best Practices',
                footerT['solution_case_studies'] || 'Case Studies'
            ];
            solutionLinks.forEach((link, i) => { 
                if (solutionTexts[i]) {
                    if (i === 0) {
                        link.textContent = `📖 ${solutionTexts[i]}`;
                    } else if (i === 1) {
                        link.textContent = `🚀 ${solutionTexts[i]}`;
                    } else if (i === 2) {
                        link.textContent = `🔬 ${solutionTexts[i]}`;
                    } else if (i === 3) {
                        link.textContent = `🔧 ${solutionTexts[i]}`;
                    } else if (i === 4) {
                        link.textContent = `⭐ ${solutionTexts[i]}`;
                    } else if (i === 5) {
                        link.textContent = `📊 ${solutionTexts[i]}`;
                    }
                }
            });
        }
        
        // 언어 변경 함수
        function changeLanguage(newLanguage) {
            currentLanguage = newLanguage;
            localStorage.setItem('ekman_language', newLanguage);
            updateUITexts();
            
            // 기존 계산 결과가 있다면 번역된 언어로 업데이트
            if (currentResults) {
                updateResultsDisplay(currentResults);
            }
            
            // 차트가 이미 생성되어 있다면 다시 그리기
            if (currentResults) {
                const visType = document.querySelector('input[name="vis_type"]:checked').value;
                let plotData;
                let config;
                
                if (isMobile()) {
                    if (visType === '3d') {
                        plotData = create3DPlot(currentResults);
                    } else {
                        plotData = createMobile2DPlot(currentResults);
                    }
                    config = {
                        displayModeBar: true,
                        displaylogo: false,
                        responsive: true,
                        scrollZoom: true,
                        doubleClick: 'reset',
                        touchAction: 'auto'
                    };
                } else if (isTablet()) {
                    if (visType === '3d') {
                        plotData = create3DPlot(currentResults);
                    } else {
                        plotData = create2DPlot(currentResults);
                    }
                    config = {
                        displayModeBar: true,
                        displaylogo: false,
                        responsive: true
                    };
                } else {
                    if (visType === '3d') {
                        plotData = create3DPlot(currentResults);
                    } else {
                        plotData = create2DPlot(currentResults);
                    }
                    config = {
                        displayModeBar: true,
                        displaylogo: false,
                        responsive: true
                    };
                }
                
                document.getElementById('plot-area').innerHTML = '';
                Plotly.newPlot('plot-area', plotData.data, plotData.layout, config);
            }
        }
        
        // 전역 변수
        let currentResults = null;
        
        // 위치 데이터
        const LOCATIONS = {
            'los_angeles': {lat: 34.0, wind: 3.0, wind_dir: 270},
            'busan': {lat: 35.1, wind: 3.5, wind_dir: 135},
            'north_pacific': {lat: 45.0, wind: 6.0, wind_dir: 135},
            'north_atlantic': {lat: 50.0, wind: 8.0, wind_dir: 270},
            'southern_ocean': {lat: 60.0, wind: 11.0, wind_dir: 270}, // 절댓값으로 변경
            'equator': {lat: 2.0, wind: 2.0, wind_dir: 90}
        };
        
        // 물리 상수
        const RHO_WATER = 1025;  // kg/m³
        const RHO_AIR = 1.225;   // kg/m³
        const CD = 0.0013;       // 항력 계수
        const OMEGA = 7.2921e-5; // 지구 자전 각속도 (rad/s)
        
        // 슬라이더 값 업데이트
        function updateSliderValues() {
            document.getElementById('wind_speed_value').textContent = parseFloat(document.getElementById('wind_speed').value).toFixed(1);
            document.getElementById('wind_direction_value').textContent = parseFloat(document.getElementById('wind_direction').value).toFixed(0);
            // 위도 값을 음수로 표시
            const latitudeValue = parseFloat(document.getElementById('latitude').value);
            document.getElementById('latitude_value').textContent = (-latitudeValue).toFixed(0);
            document.getElementById('depth_value').textContent = parseFloat(document.getElementById('depth').value).toFixed(0);
        }
        
        // 사전 설정
        function setPreset(type) {
            if (type === 'normal') {
                document.getElementById('wind_speed').value = 10.0;
                document.getElementById('wind_direction').value = 0;
                document.getElementById('latitude').value = 30;
                document.getElementById('depth').value = 100;
            } else if (type === 'strong') {
                document.getElementById('wind_speed').value = 20.0;
                document.getElementById('wind_direction').value = 45;
                document.getElementById('latitude').value = 45;
                document.getElementById('depth').value = 150;
            } else if (type === 'typhoon') {
                document.getElementById('wind_speed').value = 30.0;
                document.getElementById('wind_direction').value = 90;
                document.getElementById('latitude').value = 25;
                document.getElementById('depth').value = 200;
            }
            updateSliderValues();
        }
        
        // 지역 선택
        function onLocationSelect() {
            const selected = document.getElementById('location').value;
            if (selected !== 'custom' && LOCATIONS[selected]) {
                const loc = LOCATIONS[selected];
                document.getElementById('latitude').value = Math.abs(loc.lat); // 절댓값으로 저장
                document.getElementById('wind_speed').value = loc.wind;
                document.getElementById('wind_direction').value = loc.wind_dir;
                updateSliderValues();
            }
        }
        
        // 코리올리 매개변수 계산
        function calculateCoriolisParameter(latitude) {
            return 2 * OMEGA * Math.sin(latitude * Math.PI / 180);
        }
        
        // 에크만 수송 계산
        function calculateEkmanTransport(windSpeed, windDirection, latitude, depth) {
            if (latitude === 0) latitude = 1e-6; // 0으로 나누기 방지
            
            // 위도 값을 음수로 변환하여 계산
            const negativeLatitude = -latitude;
            const f = calculateCoriolisParameter(negativeLatitude);
            const windStress = RHO_AIR * CD * windSpeed * windSpeed;
            const windDirRad = windDirection * Math.PI / 180;
            
            const tauX = windStress * Math.cos(windDirRad);
            const tauY = windStress * Math.sin(windDirRad);
            
            const Mx = -tauY / (RHO_WATER * f);
            const My = tauX / (RHO_WATER * f);
            
            const K = 0.01; // 수직 난류 점성 계수
            const ekmanDepth = Math.PI * Math.sqrt(2 * K / Math.abs(f));
            
            // 에크만 나선 계산
            const zLevels = [];
            const uVel = [];
            const vVel = [];
            
            for (let i = 0; i < 50; i++) {
                const z = (depth / 49) * i;
                zLevels.push(z);
                
                const a = Math.sqrt(Math.abs(f) / (2 * K));
                const factor = Math.exp(-a * z) / (RHO_WATER * Math.sqrt(2 * K * Math.abs(f)));
                const cosAz = Math.cos(a * z);
                const sinAz = Math.sin(a * z);
                const sgnF = Math.sign(f);
                
                const u = factor * (tauX * cosAz - sgnF * tauY * sinAz);
                const v = factor * (sgnF * tauX * sinAz + tauY * cosAz);
                
                uVel.push(u);
                vVel.push(v);
            }
            
            const energyTransfer = tauX * uVel[0] + tauY * vVel[0];
            
            return {
                windSpeed, windDirection, latitude: negativeLatitude, depth, // 위도 값을 음수로 반환
                windStress, tauX, tauY, Mx, My, ekmanDepth,
                zLevels, uVel, vVel, f, energyTransfer
            };
        }
        
        // 테마 감지 함수
        function isDarkMode() {
            return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        }
        
        // 테마에 따른 색상 반환
        function getThemeColors() {
            const dark = isDarkMode();
            return {
                background: dark ? '#2b2b2b' : 'white',
                paper: dark ? '#1e1e1e' : 'white',
                text: dark ? '#ffffff' : '#000000',
                grid: dark ? '#404040' : 'lightgray',
                font: dark ? '#e0e0e0' : '#333333'
            };
        }
        
        // 모바일 디바이스 감지
        function isMobile() {
            return window.innerWidth <= 767;
        }
        
        // 태블릿 디바이스 감지
        function isTablet() {
            return window.innerWidth > 767 && window.innerWidth <= 1024;
        }
        
        // 향상된 모바일 메뉴 토글
        function toggleMobileMenu() {
            const menuPanel = document.querySelector('.mobile-menu-panel');
            const overlay = document.querySelector('.mobile-menu-overlay');
            const toggleButton = document.querySelector('.mobile-menu-toggle');
            const body = document.body;
            
            const isActive = menuPanel.classList.contains('active');
            
            if (!isActive) {
                // 메뉴 열기
                menuPanel.classList.add('active');
                overlay.classList.add('active');
                toggleButton.classList.add('active');
                body.classList.add('menu-open');
                toggleButton.setAttribute('aria-expanded', 'true');
                
                // 햄버거 메뉴 진동 피드백 (지원하는 디바이스에서)
                if (navigator.vibrate) {
                    navigator.vibrate(50);
                }
            
            // 메뉴가 열렸을 때 포커스 설정 (접근성 개선)
                setTimeout(() => {
                    const firstMenuItem = menuPanel.querySelector('.mobile-menu-item input, .mobile-menu-item select, .mobile-menu-item button');
                    if (firstMenuItem) firstMenuItem.focus();
                }, 400);
                
                console.log("📱 모바일 메뉴 열림");
                
            } else {
                // 메뉴 닫기
                closeMobileMenu();
            }
        }
        
        // 향상된 모바일 메뉴 닫기
        function closeMobileMenu() {
            const menuPanel = document.querySelector('.mobile-menu-panel');
            const overlay = document.querySelector('.mobile-menu-overlay');
            const toggleButton = document.querySelector('.mobile-menu-toggle');
            const body = document.body;
            
            menuPanel.classList.remove('active');
            overlay.classList.remove('active');
            toggleButton.classList.remove('active');
            body.classList.remove('menu-open');
            toggleButton.setAttribute('aria-expanded', 'false');
            
            // 메뉴가 닫혔을 때 햄버거 버튼에 포커스 (접근성 개선)
            setTimeout(() => {
                toggleButton.focus();
            }, 100);
            
            console.log("📱 모바일 메뉴 닫힘");
        }
        
        // 향상된 스와이프 제스처로 메뉴 닫기
        function setupSwipeGesture() {
            const menuPanel = document.querySelector('.mobile-menu-panel');
            const swipeIndicator = document.querySelector('.swipe-indicator');
            let startX = 0;
            let currentX = 0;
            let isDragging = false;
            let swipeStarted = false;
            
            menuPanel.addEventListener('touchstart', function(e) {
                startX = e.touches[0].clientX;
                isDragging = true;
                swipeStarted = false;
            }, { passive: true });
            
            menuPanel.addEventListener('touchmove', function(e) {
                if (!isDragging) return;
                currentX = e.touches[0].clientX;
                const diffX = currentX - startX;
                
                // 왼쪽으로 스와이프하는 경우 (메뉴 닫기)
                if (diffX < -30 && !swipeStarted) {
                    swipeStarted = true;
                    swipeIndicator.classList.add('active');
                    
                    // 진동 피드백
                    if (navigator.vibrate) {
                        navigator.vibrate(20);
                    }
                }
                
                if (swipeStarted && diffX < 0) {
                    const progress = Math.abs(diffX) / 150; // 150px 기준
                    const clampedProgress = Math.min(progress, 1);
                    
                    // 부드러운 변형 적용
                    const translateX = Math.max(diffX * 0.5, -200);
                    menuPanel.style.transform = `translateX(${translateX}px)`;
                    menuPanel.style.opacity = 1 - (clampedProgress * 0.3);
                    
                    // 스와이프 진행률에 따라 인디케이터 색상 변경
                    const hue = 240 - (clampedProgress * 60); // 파란색에서 빨간색으로
                    swipeIndicator.style.background = `linear-gradient(to bottom, transparent, hsl(${hue}, 70%, 60%), transparent)`;
                }
            }, { passive: true });
            
            menuPanel.addEventListener('touchend', function(e) {
                if (!isDragging) return;
                isDragging = false;
                swipeStarted = false;
                
                const diffX = currentX - startX;
                const swipeDistance = Math.abs(diffX);
                const swipeVelocity = swipeDistance / 300; // 간단한 속도 계산
                
                // 충분히 왼쪽으로 스와이프했거나 빠른 속도로 스와이프한 경우 메뉴 닫기
                if ((diffX < -100) || (diffX < -50 && swipeVelocity > 0.3)) {
                    // 성공적인 스와이프 피드백
                    if (navigator.vibrate) {
                        navigator.vibrate([30, 50, 30]);
                    }
                    
                    closeMobileMenu();
                    console.log(`📱 스와이프로 메뉴 닫기 (거리: ${swipeDistance.toFixed(0)}px, 속도: ${swipeVelocity.toFixed(2)})`);
                } else {
                    // 스와이프 취소 - 원래 위치로 복원
                    if (navigator.vibrate) {
                        navigator.vibrate(10);
                    }
                }
                
                // 변형 및 인디케이터 초기화
                menuPanel.style.transform = '';
                menuPanel.style.opacity = '';
                swipeIndicator.classList.remove('active');
                swipeIndicator.style.background = '';
                
            }, { passive: true });
            
            // 스와이프 취소 (터치가 메뉴 밖으로 나갔을 때)
            document.addEventListener('touchend', function(e) {
                if (isDragging && !menuPanel.contains(e.target)) {
                    isDragging = false;
                    swipeStarted = false;
                    menuPanel.style.transform = '';
                    menuPanel.style.opacity = '';
                    swipeIndicator.classList.remove('active');
                    swipeIndicator.style.background = '';
                }
            }, { passive: true });
        }
        
        // 모바일 최적화 2D 시각화 생성 (간단한 단일 차트)
        function createMobile2DPlot(results) {
            const colors = getThemeColors();
            const traces = [];
            
            // 모바일에서는 가장 중요한 정보만 간단히 표시
            // 에크만 나선 + 바람 벡터를 하나의 차트로
            
            // 1. 에크만 나선
            traces.push({
                x: results.uVel, 
                y: results.vVel,
                mode: 'lines+markers',
                line: {color: '#FF4081', width: 4},
                marker: {
                    size: 8,
                    color: results.zLevels,
                    colorscale: 'Viridis',
                    showscale: true,
                    colorbar: {
                        title: {text: t('depth'), font: {color: colors.text, size: 14}},
                        bgcolor: colors.background,
                        bordercolor: colors.grid,
                        tickfont: {color: colors.text, size: 12},
                        len: 0.6,
                        thickness: 20,
                        x: 1.02
                    }
                },
                name: currentLanguage === 'ko' ? '에크만 나선' :
                      currentLanguage === 'zh' ? '埃克曼螺线' :
                      currentLanguage === 'ja' ? 'エクマン螺旋' :
                      currentLanguage === 'es' ? 'Espiral de Ekman' :
                      currentLanguage === 'ru' ? 'Спираль Экмана' :
                      'Ekman Spiral',
                hovertemplate: `${currentLanguage === 'ko' ? '깊이' :
                               currentLanguage === 'zh' ? '深度' :
                               currentLanguage === 'ja' ? '深度' :
                               currentLanguage === 'es' ? 'Profundidad' :
                               currentLanguage === 'ru' ? 'Глубина' :
                               'Depth'}: %{marker.color:.1f}m<br>U: %{x:.4f}, V: %{y:.4f} m/s<extra></extra>`
            });
            
            // 2. 바람 벡터 (스케일 조정)
            const windDirRad = results.windDirection * Math.PI / 180;
            const windScale = Math.max(...results.uVel.map(Math.abs), ...results.vVel.map(Math.abs)) * 0.5;
            const windX = windScale * Math.cos(windDirRad);
            const windY = windScale * Math.sin(windDirRad);
            
            traces.push({
                x: [0, windX], 
                y: [0, windY],
                mode: 'lines+markers',
                line: {color: '#FF6B35', width: 6},
                marker: {size: 15, symbol: 'arrow', color: '#FF6B35'},
                name: `🌬️ ${currentLanguage === 'ko' ? '바람' :
                            currentLanguage === 'zh' ? '风' :
                            currentLanguage === 'ja' ? '風' :
                            currentLanguage === 'es' ? 'Viento' :
                            currentLanguage === 'ru' ? 'Ветер' :
                            'Wind'} ${results.windSpeed.toFixed(1)} m/s`,
                hovertemplate: `${currentLanguage === 'ko' ? '바람속도' :
                               currentLanguage === 'zh' ? '风速' :
                               currentLanguage === 'ja' ? '風速' :
                               currentLanguage === 'es' ? 'Velocidad del viento' :
                               currentLanguage === 'ru' ? 'Скорость ветра' :
                               'Wind speed'}: ${results.windSpeed.toFixed(1)} m/s<br>${currentLanguage === 'ko' ? '방향' :
                                                                                    currentLanguage === 'zh' ? '方向' :
                                                                                    currentLanguage === 'ja' ? '方向' :
                                                                                    currentLanguage === 'es' ? 'Dirección' :
                                                                                    currentLanguage === 'ru' ? 'Направление' :
                                                                                    'Direction'}: ${results.windDirection.toFixed(0)}°<extra></extra>`
            });
            
            // 3. 수송 벡터 (스케일 조정) 
            const transportScale = windScale * 0.3;
            traces.push({
                x: [0, results.Mx * transportScale / Math.abs(results.Mx || 1)], 
                y: [0, results.My * transportScale / Math.abs(results.My || 1)],
                mode: 'lines+markers',
                line: {color: '#4A9EFF', width: 5, dash: 'dash'},
                marker: {size: 12, symbol: 'arrow', color: '#4A9EFF'},
                name: `📊 ${currentLanguage === 'ko' ? '수송' :
                            currentLanguage === 'zh' ? '输运' :
                            currentLanguage === 'ja' ? '輸送' :
                            currentLanguage === 'es' ? 'Transporte' :
                            currentLanguage === 'ru' ? 'Перенос' :
                            'Transport'} ${Math.sqrt(results.Mx**2 + results.My**2).toExponential(1)} m³/s`,
                hovertemplate: `${currentLanguage === 'ko' ? '수송량' :
                               currentLanguage === 'zh' ? '输运量' :
                               currentLanguage === 'ja' ? '輸送量' :
                               currentLanguage === 'es' ? 'Transporte' :
                               currentLanguage === 'ru' ? 'Перенос' :
                               'Transport'}: ${Math.sqrt(results.Mx**2 + results.My**2).toExponential(2)} m³/s<extra></extra>`
            });
            
            const layout = {
                title: {
                    text: t('chart_title_mobile') + `<br>${currentLanguage === 'ko' ? '위도' :
                                                           currentLanguage === 'zh' ? '纬度' :
                                                           currentLanguage === 'ja' ? '緯度' :
                                                           currentLanguage === 'es' ? 'Latitud' :
                                                           currentLanguage === 'ru' ? 'Широта' :
                                                           'Latitude'}: ${(-results.latitude).toFixed(1)}°`,
                    font: {color: colors.text, size: 16},
                    x: 0.5,
                    y: 0.95
                },
                xaxis: {
                    title: {text: `U ${currentLanguage === 'ko' ? '속도 (동-서, m/s)' :
                                   currentLanguage === 'zh' ? '速度 (东-西, m/s)' :
                                   currentLanguage === 'ja' ? '速度 (東-西, m/s)' :
                                   currentLanguage === 'es' ? 'Velocidad (Este-Oeste, m/s)' :
                                   currentLanguage === 'ru' ? 'Скорость (Восток-Запад, м/с)' :
                                   'Velocity (East-West, m/s)'}`, font: {color: colors.text, size: 12}},
                    gridcolor: colors.grid,
                    tickfont: {color: colors.text, size: 11},
                    linecolor: colors.grid,
                    zeroline: true,
                    zerolinecolor: colors.grid
                },
                yaxis: {
                    title: {text: `V ${currentLanguage === 'ko' ? '속도 (남-북, m/s)' :
                                   currentLanguage === 'zh' ? '速度 (南-北, m/s)' :
                                   currentLanguage === 'ja' ? '速度 (南-北, m/s)' :
                                   currentLanguage === 'es' ? 'Velocidad (Sur-Norte, m/s)' :
                                   currentLanguage === 'ru' ? 'Скорость (Юг-Север, м/с)' :
                                   'Velocity (South-North, m/s)'}`, font: {color: colors.text, size: 12}},
                    gridcolor: colors.grid,
                    tickfont: {color: colors.text, size: 11},
                    linecolor: colors.grid,
                    zeroline: true,
                    zerolinecolor: colors.grid
                },
                height: 600,
                showlegend: true,
                legend: {
                    font: {color: colors.text, size: 11},
                    bgcolor: 'rgba(0,0,0,0)',
                    x: 0.02,
                    y: 0.98
                },
                font: {size: 11, color: colors.text},
                plot_bgcolor: colors.background,
                paper_bgcolor: colors.paper,
                margin: {l: 60, r: 80, t: 80, b: 60}
            };
            
            return {data: traces, layout: layout};
        }
        
        // 2D 시각화 생성
        function create2DPlot(results) {
            const traces = [];
            const colors = getThemeColors();
            
            // 1. 바람 vs 수송 벡터
            const windDirRad = results.windDirection * Math.PI / 180;
            const windX = results.windSpeed * Math.cos(windDirRad);
            const windY = results.windSpeed * Math.sin(windDirRad);
            
            traces.push({
                x: [0, windX], y: [0, windY],
                mode: 'lines+markers',
                line: {color: '#FF6B35', width: 4},
                marker: {size: 10},
                name: `${currentLanguage === 'ko' ? '바람' :
                        currentLanguage === 'zh' ? '风' :
                        currentLanguage === 'ja' ? '風' :
                        currentLanguage === 'es' ? 'Viento' :
                        currentLanguage === 'ru' ? 'Ветер' :
                        'Wind'} ${results.windSpeed.toFixed(1)} m/s`,
                xaxis: 'x', yaxis: 'y'
            });
            
            const transportScale = 1e6;
            traces.push({
                x: [0, results.Mx * transportScale], 
                y: [0, results.My * transportScale],
                mode: 'lines+markers',
                line: {color: '#4A9EFF', width: 4},
                marker: {size: 10},
                name: `${currentLanguage === 'ko' ? '수송' :
                        currentLanguage === 'zh' ? '输运' :
                        currentLanguage === 'ja' ? '輸送' :
                        currentLanguage === 'es' ? 'Transporte' :
                        currentLanguage === 'ru' ? 'Перенос' :
                        'Transport'} ${Math.sqrt(results.Mx**2 + results.My**2).toExponential(2)} m³/s`,
                xaxis: 'x', yaxis: 'y'
            });
            
            // 2. 에크만 나선
            traces.push({
                x: results.uVel, y: results.vVel,
                mode: 'lines+markers',
                line: {color: '#FF4081', width: 3},
                marker: {
                    size: 6,
                    color: results.zLevels,
                    colorscale: 'Viridis',
                    showscale: true,
                    colorbar: {
                        title: {text: t('depth'), font: {color: colors.text}}, 
                        x: 0.48, y: 0.75, len: 0.25,
                        bgcolor: colors.background,
                        bordercolor: colors.grid,
                        tickfont: {color: colors.text}
                    }
                },
                name: currentLanguage === 'ko' ? '에크만 나선' :
                      currentLanguage === 'zh' ? '埃克曼螺线' :
                      currentLanguage === 'ja' ? 'エクマン螺旋' :
                      currentLanguage === 'es' ? 'Espiral de Ekman' :
                      currentLanguage === 'ru' ? 'Спираль Экмана' :
                      'Ekman Spiral',
                xaxis: 'x2', yaxis: 'y2'
            });
            
            // 3. 깊이별 속도 프로파일
            traces.push({
                x: results.uVel, y: results.zLevels.map(z => -z),
                mode: 'lines+markers',
                line: {color: '#1F77B4', width: 3},
                marker: {size: 4},
                name: `U ${currentLanguage === 'ko' ? '속도 (동-서)' :
                           currentLanguage === 'zh' ? '速度 (东-西)' :
                           currentLanguage === 'ja' ? '速度 (東-西)' :
                           currentLanguage === 'es' ? 'Velocidad (Este-Oeste)' :
                           currentLanguage === 'ru' ? 'Скорость (Восток-Запад)' :
                           'Velocity (East-West)'}`,
                xaxis: 'x3', yaxis: 'y3'
            });
            
            traces.push({
                x: results.vVel, y: results.zLevels.map(z => -z),
                mode: 'lines+markers',
                line: {color: '#FF7F0E', width: 3},
                marker: {size: 4},
                name: `V ${currentLanguage === 'ko' ? '속도 (남-북)' :
                           currentLanguage === 'zh' ? '速度 (南-北)' :
                           currentLanguage === 'ja' ? '速度 (南-北)' :
                           currentLanguage === 'es' ? 'Velocidad (Sur-Norte)' :
                           currentLanguage === 'ru' ? 'Скорость (Юг-Север)' :
                           'Velocity (South-North)'}`,
                xaxis: 'x3', yaxis: 'y3'
            });
            
            // 4. 수송 성분 바 차트
            traces.push({
                x: [`Mx (${currentLanguage === 'ko' ? '동-서' :
                           currentLanguage === 'zh' ? '东-西' :
                           currentLanguage === 'ja' ? '東-西' :
                           currentLanguage === 'es' ? 'Este-Oeste' :
                           currentLanguage === 'ru' ? 'Восток-Запад' :
                           'East-West'})`, 
                    `My (${currentLanguage === 'ko' ? '남-북' :
                           currentLanguage === 'zh' ? '南-北' :
                           currentLanguage === 'ja' ? '南-北' :
                           currentLanguage === 'es' ? 'Sur-Norte' :
                           currentLanguage === 'ru' ? 'Юг-Север' :
                           'South-North'})`],
                y: [results.Mx, results.My],
                type: 'bar',
                marker: {color: ['#1F77B4', '#FF7F0E']},
                name: currentLanguage === 'ko' ? '수송 성분' :
                      currentLanguage === 'zh' ? '输运分量' :
                      currentLanguage === 'ja' ? '輸送成分' :
                      currentLanguage === 'es' ? 'Componentes de Transporte' :
                      currentLanguage === 'ru' ? 'Компоненты переноса' :
                      'Transport Components',
                xaxis: 'x4', yaxis: 'y4'
            });
            
            const layout = {
                title: {
                    text: t('chart_title_2d') + ` (${currentLanguage === 'ko' ? '위도' :
                                                     currentLanguage === 'zh' ? '纬度' :
                                                     currentLanguage === 'ja' ? '緯度' :
                                                     currentLanguage === 'es' ? 'Latitud' :
                                                     currentLanguage === 'ru' ? 'Широта' :
                                                     'Latitude'}: ${(-results.latitude).toFixed(1)}°)`,
                    font: {color: colors.text, size: 16}
                },
                grid: {rows: 2, columns: 2, pattern: 'independent'},
                
                // 모든 축 스타일링
                xaxis: {
                    title: {text: currentLanguage === 'ko' ? '동-서 방향 (m/s)' :
                                  currentLanguage === 'zh' ? '东-西方向 (m/s)' :
                                  currentLanguage === 'ja' ? '東-西方向 (m/s)' :
                                  currentLanguage === 'es' ? 'Dirección Este-Oeste (m/s)' :
                                  currentLanguage === 'ru' ? 'Направление Восток-Запад (м/с)' :
                                  'East-West Direction (m/s)', font: {color: colors.text}}, 
                    domain: [0, 0.45],
                    gridcolor: colors.grid,
                    tickfont: {color: colors.text},
                    linecolor: colors.grid
                },
                yaxis: {
                    title: {text: currentLanguage === 'ko' ? '남-북 방향 (m/s)' :
                                  currentLanguage === 'zh' ? '南-北方向 (m/s)' :
                                  currentLanguage === 'ja' ? '南-北方向 (m/s)' :
                                  currentLanguage === 'es' ? 'Dirección Sur-Norte (m/s)' :
                                  currentLanguage === 'ru' ? 'Направление Юг-Север (м/с)' :
                                  'South-North Direction (m/s)', font: {color: colors.text}}, 
                    domain: [0.55, 1],
                    gridcolor: colors.grid,
                    tickfont: {color: colors.text},
                    linecolor: colors.grid
                },
                xaxis2: {
                    title: {text: `U ${currentLanguage === 'ko' ? '속도 (m/s)' :
                                    currentLanguage === 'zh' ? '速度 (m/s)' :
                                    currentLanguage === 'ja' ? '速度 (m/s)' :
                                    currentLanguage === 'es' ? 'Velocidad (m/s)' :
                                    currentLanguage === 'ru' ? 'Скорость (м/с)' :
                                    'Velocity (m/s)'}`, font: {color: colors.text}}, 
                    domain: [0.55, 1],
                    gridcolor: colors.grid,
                    tickfont: {color: colors.text},
                    linecolor: colors.grid
                },
                yaxis2: {
                    title: {text: `V ${currentLanguage === 'ko' ? '속도 (m/s)' :
                                    currentLanguage === 'zh' ? '速度 (m/s)' :
                                    currentLanguage === 'ja' ? '速度 (m/s)' :
                                    currentLanguage === 'es' ? 'Velocidad (m/s)' :
                                    currentLanguage === 'ru' ? 'Скорость (м/с)' :
                                    'Velocity (m/s)'}`, font: {color: colors.text}}, 
                    domain: [0.55, 1],
                    gridcolor: colors.grid,
                    tickfont: {color: colors.text},
                    linecolor: colors.grid
                },
                xaxis3: {
                    title: {text: currentLanguage === 'ko' ? '속도 (m/s)' :
                                  currentLanguage === 'zh' ? '速度 (m/s)' :
                                  currentLanguage === 'ja' ? '速度 (m/s)' :
                                  currentLanguage === 'es' ? 'Velocidad (m/s)' :
                                  currentLanguage === 'ru' ? 'Скорость (м/с)' :
                                  'Velocity (m/s)', font: {color: colors.text}}, 
                    domain: [0, 0.45],
                    gridcolor: colors.grid,
                    tickfont: {color: colors.text},
                    linecolor: colors.grid
                },
                yaxis3: {
                    title: {text: t('depth'), font: {color: colors.text}}, 
                    domain: [0, 0.45],
                    gridcolor: colors.grid,
                    tickfont: {color: colors.text},
                    linecolor: colors.grid
                },
                xaxis4: {
                    title: {text: currentLanguage === 'ko' ? '성분' :
                                  currentLanguage === 'zh' ? '分量' :
                                  currentLanguage === 'ja' ? '成分' :
                                  currentLanguage === 'es' ? 'Componente' :
                                  currentLanguage === 'ru' ? 'Компонент' :
                                  'Component', font: {color: colors.text}}, 
                    domain: [0.55, 1],
                    gridcolor: colors.grid,
                    tickfont: {color: colors.text},
                    linecolor: colors.grid
                },
                yaxis4: {
                    title: {text: currentLanguage === 'ko' ? '수송량 (m³/s)' :
                                  currentLanguage === 'zh' ? '输运量 (m³/s)' :
                                  currentLanguage === 'ja' ? '輸送量 (m³/s)' :
                                  currentLanguage === 'es' ? 'Transporte (m³/s)' :
                                  currentLanguage === 'ru' ? 'Перенос (м³/с)' :
                                  'Transport (m³/s)', font: {color: colors.text}}, 
                    domain: [0, 0.45],
                    gridcolor: colors.grid,
                    tickfont: {color: colors.text},
                    linecolor: colors.grid
                },
                
                height: 800,
                showlegend: true,
                font: {size: 12, color: colors.text},
                plot_bgcolor: colors.background,
                paper_bgcolor: colors.paper,
                legend: {
                    font: {color: colors.text},
                    bgcolor: 'rgba(0,0,0,0)'
                }
            };
            
            return {data: traces, layout: layout};
        }
        
        // 3D 시각화 생성
        function create3DPlot(results) {
            const traces = [];
            const colors = getThemeColors();
            const speeds = results.uVel.map((u, i) => Math.sqrt(u*u + results.vVel[i]*results.vVel[i]));
            const depth = results.depth;
            // 라벨 다국어 지원
            const LABELS = {
                windstress: {
                    ko: '바람 응력', en: 'Windstress', zh: '风应力', ja: '風応力', es: 'Esfuerzo del viento', ru: 'Ветровое напряжение'
                },
                ekman: {
                    ko: '에크만 수송', en: 'Ekman Transport', zh: '埃克曼输运', ja: 'エクマン輸送', es: 'Transporte de Ekman', ru: 'Перенос Экмана'
                },
                geos: {
                    ko: '지오스트로픽 수송', en: 'Geostrophic Transport', zh: '地转输运', ja: '地衡流輸送', es: 'Transporte geostrófico', ru: 'Геострофический перенос'
                }
            };
            const lang = currentLanguage in LABELS.windstress ? currentLanguage : 'en';
            // 1. Ekman Spiral (얇은 파란색 벡터)
            for (let i = 0; i < results.zLevels.length; i++) {
                traces.push({
                    x: [0, results.uVel[i] * 1.5],
                    y: [0, results.vVel[i] * 1.5],
                    z: [-results.zLevels[i], -results.zLevels[i]],
                    mode: 'lines',
                    type: 'scatter3d',
                    line: {color: '#223366', width: 3},
                    showlegend: false
                });
            }
            // 2. Windstress (굵은 오렌지 화살표, 표면)
            const windDirRad = results.windDirection * Math.PI / 180;
            const windLen = Math.max(...speeds) * 3 || 2;
            const windX = windLen * Math.cos(windDirRad);
            const windY = windLen * Math.sin(windDirRad);
            traces.push({
                x: [0, windX], y: [0, windY], z: [0, 0],
                mode: 'lines+markers+text',
                type: 'scatter3d',
                line: {color: '#FF7F32', width: 14},
                marker: {size: 10, color: '#FF7F32'},
                name: LABELS.windstress[lang],
                text: ['', LABELS.windstress[lang]],
                textposition: 'top right',
                showlegend: true
            });
            // 3. Ekman Transport (굵은 연두색 화살표, 표면)
            const transportScale = windLen * 0.7;
            const transportMag = Math.sqrt(results.Mx**2 + results.My**2);
            const ekmanX = (results.Mx / (transportMag || 1)) * transportScale;
            const ekmanY = (results.My / (transportMag || 1)) * transportScale;
                traces.push({
                x: [0, ekmanX], y: [0, ekmanY], z: [0, 0],
                mode: 'lines+markers+text',
                type: 'scatter3d',
                line: {color: '#A3D977', width: 14},
                marker: {size: 10, color: '#A3D977'},
                name: LABELS.ekman[lang],
                text: ['', LABELS.ekman[lang]],
                textposition: 'middle right',
                showlegend: true
            });
            // 4. Geostrophic Transport (굵은 파란색 화살표, 바닥, 예시로 대각선)
            const geoLen = windLen * 0.8;
            const geoAngle = windDirRad + Math.PI / 3; // 예시로 바람방향에서 60도
            const geoX = geoLen * Math.cos(geoAngle);
            const geoY = geoLen * Math.sin(geoAngle);
            traces.push({
                x: [0, geoX], y: [0, geoY], z: [-depth, -depth],
                mode: 'lines+markers+text',
                type: 'scatter3d',
                line: {color: '#3355AA', width: 14},
                marker: {size: 10, color: '#3355AA'},
                name: LABELS.geos[lang],
                text: ['', LABELS.geos[lang]],
                textposition: 'bottom left',
                showlegend: true
            });
            // 5. 기존 나선 전체 연결선(얇게, 배경)
            traces.push({
                x: results.uVel,
                y: results.vVel,
                z: results.zLevels.map(z => -z),
                    mode: 'lines',
                    type: 'scatter3d',
                line: {color: '#223366', width: 2, dash: 'dot'},
                showlegend: false
            });
            // 레이아웃 및 라벨
            const layout = {
                title: {
                    text: t('chart_title_3d') + `<br>${currentLanguage === 'ko' ? '위도' :
                                                  currentLanguage === 'zh' ? '纬度' :
                                                  currentLanguage === 'ja' ? '緯度' :
                                                  currentLanguage === 'es' ? 'Latitud' :
                                                  currentLanguage === 'ru' ? 'Широта' :
                                                  'Latitude'}: ${(-results.latitude).toFixed(1)}°`,
                    font: {color: colors.text, size: 18},
                    x: 0.5,
                    y: 0.95
                },
                scene: {
                    bgcolor: colors.background,
                    xaxis: {
                        title: {text: `${currentLanguage === 'ko' ? '속도/수송 (동-서, m/s)' :
                                      currentLanguage === 'zh' ? '速度/输运 (东-西, m/s)' :
                                      currentLanguage === 'ja' ? '速度/輸送 (東-西, m/s)' :
                                      currentLanguage === 'es' ? 'Velocidad/Transporte (Este-Oeste, m/s)' :
                                      currentLanguage === 'ru' ? 'Скорость/Перенос (Восток-Запад, м/с)' :
                                      'Velocity/Transport (East-West, m/s)'}`, font: {color: colors.text, size: 14}},
                        gridcolor: colors.grid,
                        tickfont: {color: colors.text, size: 12},
                        linecolor: colors.grid,
                        backgroundcolor: colors.background
                    },
                    yaxis: {
                        title: {text: `${currentLanguage === 'ko' ? '속도/수송 (남-북, m/s)' :
                                      currentLanguage === 'zh' ? '速度/输运 (南-北, m/s)' :
                                      currentLanguage === 'ja' ? '速度/輸送 (南-北, m/s)' :
                                      currentLanguage === 'es' ? 'Velocidad/Transporte (Sur-Norte, m/s)' :
                                      currentLanguage === 'ru' ? 'Скорость/Перенос (Юг-Север, м/с)' :
                                      'Velocity/Transport (South-North, m/s)'}`, font: {color: colors.text, size: 14}},
                        gridcolor: colors.grid,
                        tickfont: {color: colors.text, size: 12},
                        linecolor: colors.grid,
                        backgroundcolor: colors.background
                    },
                    zaxis: {
                        title: {text: t('depth'), font: {color: colors.text, size: 14}},
                        gridcolor: colors.grid,
                        tickfont: {color: colors.text, size: 12},
                        linecolor: colors.grid,
                        backgroundcolor: colors.background
                    },
                    camera: {
                        eye: {x: 1.5, y: 1.5, z: 1.2},
                        center: {x: 0, y: 0, z: 0}
                    },
                    aspectmode: 'cube'
                },
                autosize: true,
                width: null,
                height: null,
                margin: {l: 0, r: 0, t: 60, b: 0},
                font: {size: 14, color: colors.text},
                plot_bgcolor: colors.background,
                paper_bgcolor: colors.paper,
                legend: {
                    font: {color: colors.text, size: 12},
                    bgcolor: 'rgba(0,0,0,0)',
                    x: 0.02,
                    y: 0.98
                },
                annotations: []
            };
            return {data: traces, layout: layout};
        }
        
        // 메인 계산 및 시각화 함수
        function calculateAndVisualize() {
            try {
                console.log("🔄 계산 시작...");
                
                const windSpeed = parseFloat(document.getElementById('wind_speed').value);
                const windDirection = parseFloat(document.getElementById('wind_direction').value);
                let latitude = parseFloat(document.getElementById('latitude').value);
                const depth = parseFloat(document.getElementById('depth').value);
                
                if (latitude === 0) {
                    latitude = 1;
                    document.getElementById('latitude').value = 1;
                    updateSliderValues();
                }
                
                // 위도 값을 음수로 변환하여 계산
                const negativeLatitude = -latitude;
                const results = calculateEkmanTransport(windSpeed, windDirection, negativeLatitude, depth);
                currentResults = results;
                
                const visType = document.querySelector('input[name="vis_type"]:checked').value;
                
                let plotData;
                let config;
                
                if (isMobile()) {
                    // 모바일 최적화
                    if (visType === '3d') {
                        plotData = create3DPlot(results);
                    } else {
                        plotData = createMobile2DPlot(results);
                    }
                    
                    config = {
                        displayModeBar: true,
                        displaylogo: false,
                        responsive: true,
                        scrollZoom: true,
                        modeBarButtonsToRemove: ['pan2d', 'lasso2d', 'select2d'],
                        modeBarButtonsToAdd: ['downloadpng'],
                        toImageButtonOptions: {
                            format: 'png',
                            filename: 'ekman_transport_mobile',
                            height: 800,
                            width: 600,
                            scale: 2
                        },
                        // 모바일 터치 최적화
                        doubleClick: 'reset',
                        touchAction: 'auto'
                    };
                    
                    // 모바일에서 계산 후 메뉴 자동 닫기 (부드러운 애니메이션)
                    setTimeout(() => {
                        closeMobileMenu();
                        
                        // 성공 피드백
                        if (navigator.vibrate) {
                            navigator.vibrate([100, 50, 100]);
                        }
                        
                        console.log("📱 계산 완료 - 메뉴 자동 닫기");
                    }, 800);
                    
                } else if (isTablet()) {
                    // 태블릿 최적화
                    if (visType === '3d') {
                        plotData = create3DPlot(results);
                    } else {
                        plotData = create2DPlot(results);
                    }
                    
                    config = {
                        displayModeBar: true,
                        displaylogo: false,
                        responsive: true,
                        modeBarButtonsToAdd: ['downloadpng'],
                        toImageButtonOptions: {
                            format: 'png',
                            filename: 'ekman_transport_tablet',
                            height: 900,
                            width: 1200,
                            scale: 2
                        }
                    };
                    
                } else {
                    // 데스크톱 (기존)
                    if (visType === '3d') {
                        plotData = create3DPlot(results);
                    } else {
                        plotData = create2DPlot(results);
                    }
                    
                    config = {
                        displayModeBar: true,
                        displaylogo: false,
                        responsive: true,
                        modeBarButtonsToAdd: ['downloadpng'],
                        toImageButtonOptions: {
                            format: 'png',
                            filename: 'ekman_transport_plot',
                            height: 1000,
                            width: 1600,
                            scale: 2
                        }
                    };
                }
                
                document.getElementById('plot-area').innerHTML = '';
                Plotly.newPlot('plot-area', plotData.data, plotData.layout, config);
                
                // 화면 크기 변경 시 자동 리사이즈 및 레이아웃 재구성
                window.addEventListener('resize', function() {
                    Plotly.Plots.resize('plot-area');
                    handleWindowResize();
                });
                
                updateResultsDisplay(results);
                
                console.log("✅ 계산 및 시각화 완료!");
                
            } catch (error) {
                console.error("❌ 오류 발생:", error);
                document.getElementById('plot-area').innerHTML = 
                    `<div style="color: red; text-align: center; padding: 50px; font-size: 16px;">
                        오류: ${error.message}<br>파라미터를 확인해주세요.
                    </div>`;
            }
        }
        
        // 결과 표시 업데이트
        function updateResultsDisplay(results) {
            // 결과 라벨들도 번역 적용
            const resultLabels = document.querySelectorAll('.result-label');
            resultLabels.forEach((element, index) => {
                const labels = ['wind_stress', 'ekman_depth', 'total_transport', 'energy_transfer'];
                if (labels[index]) {
                    element.textContent = t(labels[index]);
                }
            });
            
            // 번역된 단위로 결과 값 표시
            document.getElementById('wind_stress').textContent = 
                `${(results.windStress * 1000).toFixed(3)} ${t('unit_wind_stress')}`;
            document.getElementById('ekman_depth').textContent = 
                `${results.ekmanDepth.toFixed(2)} ${t('unit_meter')}`;
            
            const totalTransport = Math.sqrt(results.Mx**2 + results.My**2);
            document.getElementById('total_transport').textContent = 
                `${totalTransport.toExponential(3)} ${t('unit_transport')}`;
            document.getElementById('energy_transfer').textContent = 
                `${(results.energyTransfer * 1000).toFixed(4)} ${t('unit_energy')}`;
        }
        
        // 내보내기
        function exportResults() {
            if (!currentResults) {
                const message = currentLanguage === 'ko' ? "❌ 먼저 계산을 수행하세요." :
                               currentLanguage === 'zh' ? "❌ 请先执行计算。" :
                               currentLanguage === 'ja' ? "❌ まず計算を実行してください。" :
                               currentLanguage === 'es' ? "❌ Por favor, ejecute el cálculo primero." :
                               currentLanguage === 'ru' ? "❌ Сначала выполните расчет." :
                               "❌ Please run the calculation first.";
                console.log(message);
                return;
            }
            const exportData = {
                [currentLanguage === 'ko' ? '입력 파라미터' :
                 currentLanguage === 'zh' ? '输入参数' :
                 currentLanguage === 'ja' ? '入力パラメータ' :
                 currentLanguage === 'es' ? 'Parámetros de Entrada' :
                 currentLanguage === 'ru' ? 'Входные параметры' :
                 'Input Parameters']: {
                    [t('wind_speed')]: currentResults.windSpeed,
                    [t('wind_direction')]: currentResults.windDirection,
                    [t('latitude')]: -currentResults.latitude,
                    [t('depth')]: currentResults.depth
                },
                [currentLanguage === 'ko' ? '계산 결과' :
                 currentLanguage === 'zh' ? '计算结果' :
                 currentLanguage === 'ja' ? '計算結果' :
                 currentLanguage === 'es' ? 'Resultados del Cálculo' :
                 currentLanguage === 'ru' ? 'Результаты расчета' :
                 'Calculation Results']: {
                    [t('wind_stress')]: currentResults.windStress.toExponential(6),
                    [t('ekman_depth')]: currentResults.ekmanDepth.toFixed(2),
                    [`Mx ${currentLanguage === 'ko' ? '수송' :
                           currentLanguage === 'zh' ? '输运' :
                           currentLanguage === 'ja' ? '輸送' :
                           currentLanguage === 'es' ? 'Transporte' :
                           currentLanguage === 'ru' ? 'Перенос' :
                           'Transport'} (m³/s)`]: currentResults.Mx.toExponential(6),
                    [`My ${currentLanguage === 'ko' ? '수송' :
                           currentLanguage === 'zh' ? '输运' :
                           currentLanguage === 'ja' ? '輸送' :
                           currentLanguage === 'es' ? 'Transporte' :
                           currentLanguage === 'ru' ? 'Перенос' :
                           'Transport'} (m³/s)`]: currentResults.My.toExponential(6),
                    [t('total_transport')]: Math.sqrt(currentResults.Mx**2 + currentResults.My**2).toExponential(6),
                    [t('energy_transfer')]: currentResults.energyTransfer.toExponential(6),
                    [currentLanguage === 'ko' ? '코리올리 매개변수' :
                     currentLanguage === 'zh' ? '科里奥利参数' :
                     currentLanguage === 'ja' ? 'コリオリパラメータ' :
                     currentLanguage === 'es' ? 'Parámetro de Coriolis' :
                     currentLanguage === 'ru' ? 'Параметр Кориолиса' :
                     'Coriolis Parameter']: currentResults.f.toExponential(6)
                }
            };
            // 실제 다운로드 기능 추가
            const blob = new Blob([JSON.stringify(exportData, null, 2)], {type: "application/json"});
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "ekman_export.json";
            document.body.appendChild(a);
            a.click();
            setTimeout(() => {
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
            }, 0);
        }
        
                // 테마 변경 감지 및 차트 업데이트 (디바이스별 최적화)
        function handleThemeChange() {
            if (currentResults) {
                const visType = document.querySelector('input[name="vis_type"]:checked').value;
                let plotData;
                let config;
                
                // 디바이스별 차트 선택
                if (isMobile()) {
                    if (visType === '3d') {
                        plotData = create3DPlot(currentResults);
                    } else {
                        plotData = createMobile2DPlot(currentResults);
                    }
                    config = {
                        displayModeBar: true,
                        displaylogo: false,
                        responsive: true,
                        scrollZoom: true,
                        doubleClick: 'reset',
                        touchAction: 'auto'
                    };
                } else if (isTablet()) {
                    if (visType === '3d') {
                        plotData = create3DPlot(currentResults);
                    } else {
                        plotData = create2DPlot(currentResults);
                    }
                    config = {
                        displayModeBar: true,
                        displaylogo: false,
                        responsive: true
                    };
                } else {
                    if (visType === '3d') {
                        plotData = create3DPlot(currentResults);
                    } else {
                        plotData = create2DPlot(currentResults);
                    }
                    config = {
                        displayModeBar: true,
                        displaylogo: false,
                        responsive: true
                    };
                }
                
                Plotly.newPlot('plot-area', plotData.data, plotData.layout, config);
                
                // 차트 리사이즈 적용
                setTimeout(() => {
                    Plotly.Plots.resize('plot-area');
                }, 100);
                
                console.log(`🎨 테마 변경 - ${isMobile() ? '모바일' : isTablet() ? '태블릿' : '데스크톱'} 최적화 적용!`);
            }
        }
        
        // 윈도우 리사이즈 감지 및 적응형 레이아웃
        function handleWindowResize() {
            if (currentResults) {
                // 디바이스 타입이 변경되었을 때 차트 재구성
                setTimeout(() => {
                    handleThemeChange();
                }, 200);
            }
        }
        
        // 이벤트 리스너 설정
        document.addEventListener('DOMContentLoaded', function() {
            // 언어 설정 초기화
            const languageSelect = document.getElementById('language');
            languageSelect.value = currentLanguage;
            
            // 언어 변경 이벤트 리스너
            languageSelect.addEventListener('change', function() {
                changeLanguage(this.value);
                console.log(`🌍 ${currentLanguage === 'ko' ? '언어가' :
                                  currentLanguage === 'zh' ? '语言已切换为' :
                                  currentLanguage === 'ja' ? '言語が' :
                                  currentLanguage === 'es' ? 'Idioma cambiado a' :
                                  currentLanguage === 'ru' ? 'Язык изменен на' :
                                  'Language changed to'} ${currentLanguage}${currentLanguage === 'ko' ? '로 변경되었습니다.' :
                                                                                                      currentLanguage === 'zh' ? '' :
                                                                                                      currentLanguage === 'ja' ? 'に変更されました。' :
                                                                                                      currentLanguage === 'es' ? '' :
                                                                                                      currentLanguage === 'ru' ? '' :
                                                                                                      ''}`);
            });
            
            // 초기 UI 텍스트 설정
            updateUITexts();
            
            // 슬라이더 이벤트
            ['wind_speed', 'wind_direction', 'latitude', 'depth'].forEach(id => {
                document.getElementById(id).addEventListener('input', updateSliderValues);
            });
            
            // 지역 선택 이벤트
            document.getElementById('location').addEventListener('change', onLocationSelect);
            
            // 키보드 이벤트 (ESC로 메뉴 닫기, Enter로 메뉴 열기)
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape') {
                    const menuPanel = document.querySelector('.mobile-menu-panel');
                    if (menuPanel && menuPanel.classList.contains('active')) {
                        closeMobileMenu();
                        e.preventDefault();
                    }
                }
                
                // 햄버거 버튼에 포커스가 있을 때 Enter/Space로 메뉴 토글
                if ((e.key === 'Enter' || e.key === ' ') && e.target.classList.contains('mobile-menu-toggle')) {
                    toggleMobileMenu();
                    e.preventDefault();
                }
            });
            
            // 모바일 스와이프 제스처 설정
            if (isMobile()) {
                setupSwipeGesture();
                setupButtonDragGesture();
            }
            
            // 버튼 드래그로 메뉴 열기 제스처 설정
            function setupButtonDragGesture() {
                const menuToggle = document.querySelector('.mobile-menu-toggle');
                const menuPanel = document.querySelector('.mobile-menu-panel');
                const overlay = document.querySelector('.mobile-menu-overlay');
                let startX = 0;
                let currentX = 0;
                let isDragging = false;
                let dragStarted = false;
                
                menuToggle.addEventListener('touchstart', function(e) {
                    startX = e.touches[0].clientX;
                    isDragging = true;
                    dragStarted = false;
                    e.preventDefault();
                }, { passive: false });
                
                menuToggle.addEventListener('touchmove', function(e) {
                    if (!isDragging) return;
                    currentX = e.touches[0].clientX;
                    const diffX = currentX - startX;
                    
                    // 우측으로 드래그하는 경우 (메뉴 열기)
                    if (diffX > 30 && !dragStarted) {
                        dragStarted = true;
                        
                        // 메뉴 열기 시작
                        menuPanel.classList.add('active');
                        overlay.classList.add('active');
                        menuToggle.classList.add('active');
                        document.body.classList.add('menu-open');
                        menuToggle.setAttribute('aria-expanded', 'true');
                        
                        // 진동 피드백
                        if (navigator.vibrate) {
                            navigator.vibrate(20);
                        }
                    }
                    
                    if (dragStarted && diffX > 0) {
                        // 패널을 드래그 거리에 따라 이동
                        const maxWidth = menuPanel.offsetWidth || 350;
                        const translateX = Math.min(diffX - maxWidth, 0);
                        menuPanel.style.transform = `translateX(${translateX}px)`;
                    }
                }, { passive: true });
                
                menuToggle.addEventListener('touchend', function(e) {
                    if (!isDragging) return;
                    isDragging = false;
                    
                    const diffX = currentX - startX;
                    
                    if (dragStarted) {
                        // 충분히 우측으로 드래그했으면 메뉴 열림 유지, 아니면 닫기
                        if (diffX < 50) {
                            // 드래그가 충분하지 않으면 메뉴 닫기
                            menuPanel.classList.remove('active');
                            overlay.classList.remove('active');
                            menuToggle.classList.remove('active');
                            document.body.classList.remove('menu-open');
                            menuToggle.setAttribute('aria-expanded', 'false');
                        }
                    }
                    
                    // 변형 초기화
                    menuPanel.style.transform = '';
                    dragStarted = false;
                }, { passive: true });
                
                // 클릭 이벤트는 드래그가 아닐 때만 작동
                menuToggle.addEventListener('click', function(e) {
                    if (isDragging) {
                        e.preventDefault();
                        return false;
                    }
                });
            }
            
            // 시스템 테마 변경 감지
            if (window.matchMedia) {
                const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
                mediaQuery.addEventListener('change', handleThemeChange);
                
                // 초기 테마 상태 로그
                console.log(`🎨 현재 테마: ${isDarkMode() ? '다크 모드' : '라이트 모드'}`);
            }
            
            // 시각화 타입 변경 이벤트
            document.querySelectorAll('input[name="vis_type"]').forEach(radio => {
                radio.addEventListener('change', function() {
                    if (currentResults) {
                        handleThemeChange(); // 디바이스별 최적화된 차트 렌더링
                    }
                });
            });
            
            // 윈도우 리사이즈 이벤트 (디바이스 변경 감지)
            window.addEventListener('resize', handleWindowResize);
            
            // 모바일 터치 이벤트 최적화
            if (isMobile()) {
                // 모바일에서 드래그 시 페이지 스크롤 방지
                document.addEventListener('touchmove', function(e) {
                    if (e.target.closest('#plot-area')) {
                        e.preventDefault();
                    }
                }, { passive: false });
                
                console.log("📱 모바일 최적화 모드 활성화");
            } else if (isTablet()) {
                console.log("📱 태블릿 최적화 모드 활성화");
            } else {
                console.log("🖥️ 데스크톱 모드 활성화");
            }
            
            // 초기값 설정
            updateSliderValues();
            
            console.log("🌊 Ekman Transport Visualizer 로드 완료!");
            console.log("📊 파이썬 스타일 시각화가 준비되었습니다.");
            console.log("🌗 자동 다크/라이트 모드 전환이 활성화되었습니다.");
            console.log("📱 반응형 디자인 (데스크톱/태블릿/모바일) 지원");
            const multiLangMessage = currentLanguage === 'ko' ? `🌍 다중언어 지원 활성화 (현재: ${currentLanguage})` :
                                    currentLanguage === 'zh' ? `🌍 多语言支持已激活 (当前: ${currentLanguage})` :
                                    currentLanguage === 'ja' ? `🌍 多言語サポートが有効 (現在: ${currentLanguage})` :
                                    currentLanguage === 'es' ? `🌍 Soporte multiidioma activado (actual: ${currentLanguage})` :
                                    currentLanguage === 'ru' ? `🌍 Поддержка многоязычности активирована (текущий: ${currentLanguage})` :
                                    `🌍 Multi-language support activated (current: ${currentLanguage})`;
            console.log(multiLangMessage);
        });
        
        // 💡 솔루션 모달 관련 함수들
        function openSolutionModal() {
            document.getElementById('solutionModal').style.display = 'block';
            // 모달 제목을 현재 언어로 업데이트
            document.querySelector('.solution-modal-title').textContent = `💡 ${t('solution_title')}`;
            showQuickStart(); // 기본적으로 빠른 시작 페이지 표시
        }
        
        function closeSolutionModal() {
            document.getElementById('solutionModal').style.display = 'none';
        }
        
        // 모달 외부 클릭 시 닫기
        document.addEventListener('click', function(event) {
            const modal = document.getElementById('solutionModal');
            if (event.target === modal) {
                closeSolutionModal();
            }
        });
        
        // 빠른 시작 가이드
        function showQuickStart() {
            const modalBody = document.getElementById('solutionModalBody');
            modalBody.innerHTML = `
                <div class="solution-section">
                    <h3>🚀 ${t('solution_quick_start_title')}</h3>
                    <p>${t('solution_quick_start_desc')}</p>
                    
                    <div class="solution-step">
                        <h4>${t('solution_step1_title')}</h4>
                        <ul>
                            <li>🌬️ <strong>${t('wind_speed')}</strong>: 0-30 m/s ${currentLanguage === 'ko' ? '범위에서 설정 (기본값: 10 m/s)' : 'range (default: 10 m/s)'}</li>
                            <li>🧭 <strong>${t('wind_direction')}</strong>: 0-360° ${currentLanguage === 'ko' ? '범위에서 설정 (기본값: 0도)' : 'range (default: 0°)'}</li>
                            <li>🌍 <strong>${t('latitude')}</strong>: -90° to 90° ${currentLanguage === 'ko' ? '범위에서 설정 (기본값: 30도)' : 'range (default: 30°)'}</li>
                            <li>🌊 <strong>${t('depth')}</strong>: 10-500m ${currentLanguage === 'ko' ? '범위에서 설정 (기본값: 100m)' : 'range (default: 100m)'}</li>
                        </ul>
                    </div>
                    
                    <div class="solution-step">
                        <h4>${t('solution_step2_title')}</h4>
                        <ul>
                            <li>🔮 <strong>${t('vis_3d')}</strong>: ${currentLanguage === 'ko' ? '입체적인 에크만 나선과 수송 벡터 확인' : '3D Ekman spiral and transport vectors'}</li>
                            <li>📈 <strong>${t('vis_2d')}</strong>: ${currentLanguage === 'ko' ? '평면에서의 해류 패턴과 깊이별 변화 분석' : '2D current patterns and depth variations'}</li>
                        </ul>
                    </div>
                    
                    <div class="solution-step">
                        <h4>${t('solution_step3_title')}</h4>
                        <ul>
                            <li>🌤️ <strong>${t('preset_normal')}</strong>: ${currentLanguage === 'ko' ? '평상시 바람 조건 (10 m/s)' : 'Normal wind conditions (10 m/s)'}</li>
                            <li>💨 <strong>${t('preset_strong')}</strong>: ${currentLanguage === 'ko' ? '강한 바람 조건 (20 m/s)' : 'Strong wind conditions (20 m/s)'}</li>
                            <li>🌪️ <strong>${t('preset_typhoon')}</strong>: ${currentLanguage === 'ko' ? '극한 바람 조건 (30 m/s)' : 'Extreme wind conditions (30 m/s)'}</li>
                        </ul>
                    </div>
                    
                    <div class="solution-step">
                        <h4>${t('solution_step4_title')}</h4>
                        <ul>
                            <li>🔄 <strong>${t('calc_button')}</strong> ${currentLanguage === 'ko' ? '버튼 클릭' : 'button click'}</li>
                            <li>📊 <strong>${currentLanguage === 'ko' ? '결과 확인' : 'Check results'}</strong>: ${currentLanguage === 'ko' ? '바람 응력, 에크만 깊이, 총 수송량 등' : 'Wind stress, Ekman depth, total transport, etc.'}</li>
                            <li>💾 <strong>${t('export_button')}</strong>: ${currentLanguage === 'ko' ? 'JSON 형태로 데이터 저장' : 'Save data as JSON'}</li>
                        </ul>
                    </div>
                    
                    <div class="solution-tip">
                        <strong>💡 ${currentLanguage === 'ko' ? '팁:' : 'Tip:'}</strong> ${currentLanguage === 'ko' ? '처음 사용하시는 분들은 "일반" 사전 설정부터 시작하시는 것을 권장합니다.' : 'For first-time users, we recommend starting with the "Normal" preset.'}
                    </div>
                </div>
            `;
        }
        
        // 고급 사용법
        function showAdvancedUsage() {
            const modalBody = document.getElementById('solutionModalBody');
            modalBody.innerHTML = `
                <div class="solution-section">
                    <h3>🔬 ${t('solution_advanced_title')}</h3>
                    <p>${t('solution_advanced_desc')}</p>
                    
                    <div class="solution-section">
                        <h4>🌊 ${currentLanguage === 'ko' ? '지역별 특성 분석' : 'Regional Characteristic Analysis'}</h4>
                        <ul>
                            <li><strong>${currentLanguage === 'ko' ? '북태평양' : 'North Pacific'}</strong>: ${currentLanguage === 'ko' ? '강한 서풍과 쿠로시오 해류의 상호작용' : 'Strong westerlies and Kuroshio Current interaction'}</li>
                            <li><strong>${currentLanguage === 'ko' ? '북대서양' : 'North Atlantic'}</strong>: ${currentLanguage === 'ko' ? '걸프 해류와 북대서양 해류의 복합 효과' : 'Gulf Stream and North Atlantic Current combined effects'}</li>
                            <li><strong>${currentLanguage === 'ko' ? '남극해' : 'Southern Ocean'}</strong>: ${currentLanguage === 'ko' ? '극지방의 강한 서풍과 남극 순환' : 'Polar strong westerlies and Antarctic circulation'}</li>
                            <li><strong>${currentLanguage === 'ko' ? '적도' : 'Equator'}</strong>: ${currentLanguage === 'ko' ? '코리올리 효과가 최소화된 지역' : 'Region with minimized Coriolis effect'}</li>
                        </ul>
                    </div>
                    
                    <div class="solution-section">
                        <h4>📊 ${currentLanguage === 'ko' ? '3D 시각화 심화 분석' : '3D Visualization Deep Analysis'}</h4>
                        <ul>
                            <li><strong>${currentLanguage === 'ko' ? '에크만 나선' : 'Ekman Spiral'}</strong>: ${currentLanguage === 'ko' ? '깊이에 따른 해류 방향 변화 패턴' : 'Current direction change pattern with depth'}</li>
                            <li><strong>${currentLanguage === 'ko' ? '수송 벡터' : 'Transport Vectors'}</strong>: ${currentLanguage === 'ko' ? '바람 응력에 의한 해수 이동량' : 'Seawater transport due to wind stress'}</li>
                            <li><strong>${currentLanguage === 'ko' ? '에너지 전달' : 'Energy Transfer'}</strong>: ${currentLanguage === 'ko' ? '바람에서 해수로의 에너지 전달률' : 'Energy transfer rate from wind to seawater'}</li>
                        </ul>
                    </div>
                    
                    <div class="solution-section">
                        <h4>🔧 ${currentLanguage === 'ko' ? '파라미터 최적화' : 'Parameter Optimization'}</h4>
                        <ul>
                            <li><strong>${currentLanguage === 'ko' ? '위도별 코리올리 효과' : 'Latitude-dependent Coriolis Effect'}</strong>: ${currentLanguage === 'ko' ? '위도가 높을수록 코리올리 효과 증가' : 'Coriolis effect increases with latitude'}</li>
                            <li><strong>${currentLanguage === 'ko' ? '바람 속도와 응력' : 'Wind Speed and Stress'}</strong>: ${currentLanguage === 'ko' ? '바람 속도의 제곱에 비례하는 응력' : 'Stress proportional to wind speed squared'}</li>
                            <li><strong>${currentLanguage === 'ko' ? '깊이와 난류' : 'Depth and Turbulence'}</strong>: ${currentLanguage === 'ko' ? '깊이에 따른 수직 난류 확산' : 'Vertical turbulence diffusion with depth'}</li>
                        </ul>
                    </div>
                    
                    <div class="solution-warning">
                        <strong>⚠️ ${currentLanguage === 'ko' ? '주의사항:' : 'Warning:'}</strong> ${currentLanguage === 'ko' ? '극한 조건(태풍 등)에서는 실제 해양 현상과 차이가 있을 수 있습니다.' : 'Under extreme conditions (typhoons, etc.), there may be differences from actual ocean phenomena.'}
                    </div>
                </div>
            `;
        }
        
        // 문제 해결
        function showTroubleshooting() {
            const modalBody = document.getElementById('solutionModalBody');
            modalBody.innerHTML = `
                <div class="solution-section">
                    <h3>🔧 ${t('solution_trouble_title')}</h3>
                    <p>${t('solution_trouble_desc')}</p>
                    
                    <div class="solution-section">
                        <h4>❓ ${currentLanguage === 'ko' ? '차트가 표시되지 않을 때' : 'When charts are not displayed'}</h4>
                        <ul>
                            <li>${currentLanguage === 'ko' ? '인터넷 연결 상태 확인' : 'Check internet connection'}</li>
                            <li>${currentLanguage === 'ko' ? '브라우저 새로고침 (F5)' : 'Browser refresh (F5)'}</li>
                            <li>${currentLanguage === 'ko' ? '다른 브라우저로 시도' : 'Try different browser'}</li>
                            <li>${currentLanguage === 'ko' ? 'JavaScript 활성화 확인' : 'Check JavaScript enabled'}</li>
                        </ul>
                    </div>
                    
                    <div class="solution-section">
                        <h4>❓ ${currentLanguage === 'ko' ? '계산 결과가 이상할 때' : 'When calculation results are abnormal'}</h4>
                        <ul>
                            <li>${currentLanguage === 'ko' ? '파라미터 값이 유효한 범위인지 확인' : 'Check if parameter values are in valid range'}</li>
                            <li>${currentLanguage === 'ko' ? '위도 값이 -90도에서 90도 사이인지 확인' : 'Check if latitude is between -90° and 90°'}</li>
                            <li>${currentLanguage === 'ko' ? '바람 속도가 0보다 큰지 확인' : 'Check if wind speed is greater than 0'}</li>
                            <li>${currentLanguage === 'ko' ? '깊이 값이 10m 이상인지 확인' : 'Check if depth is 10m or more'}</li>
                        </ul>
                    </div>
                    
                    <div class="solution-section">
                        <h4>❓ ${currentLanguage === 'ko' ? '내보내기가 작동하지 않을 때' : 'When export is not working'}</h4>
                        <ul>
                            <li>${currentLanguage === 'ko' ? '먼저 계산을 실행했는지 확인' : 'Check if calculation was executed first'}</li>
                            <li>${currentLanguage === 'ko' ? '브라우저의 팝업 차단 설정 확인' : 'Check browser popup blocker settings'}</li>
                            <li>${currentLanguage === 'ko' ? '다운로드 폴더 권한 확인' : 'Check download folder permissions'}</li>
                        </ul>
                    </div>
                    
                    <div class="solution-section">
                        <h4>❓ ${currentLanguage === 'ko' ? '모바일에서 사용할 때' : 'When using on mobile'}</h4>
                        <ul>
                            <li>${currentLanguage === 'ko' ? '가로 모드로 전환하여 사용' : 'Switch to landscape mode'}</li>
                            <li>${currentLanguage === 'ko' ? '핀치 줌 제스처로 차트 확대/축소' : 'Pinch zoom gesture for chart zoom'}</li>
                            <li>${currentLanguage === 'ko' ? '터치 드래그로 차트 회전 (3D)' : 'Touch drag for chart rotation (3D)'}</li>
                        </ul>
                    </div>
                    
                    <div class="solution-tip">
                        <strong>💡 ${currentLanguage === 'ko' ? '팁:' : 'Tip:'}</strong> ${currentLanguage === 'ko' ? '문제가 지속되면 브라우저 캐시를 삭제하고 다시 시도해보세요.' : 'If problems persist, clear browser cache and try again.'}
                    </div>
                </div>
            `;
        }
        
        // 모범 사례
        function showBestPractices() {
            const modalBody = document.getElementById('solutionModalBody');
            modalBody.innerHTML = `
                <div class="solution-section">
                    <h3>⭐ ${t('solution_best_title')}</h3>
                    <p>${t('solution_best_desc')}</p>
                    
                    <div class="solution-section">
                        <h4>🎯 ${currentLanguage === 'ko' ? '파라미터 설정 모범 사례' : 'Parameter Setting Best Practices'}</h4>
                        <ul>
                            <li><strong>${t('wind_speed')}</strong>: ${currentLanguage === 'ko' ? '실제 관측 데이터 기반 설정' : 'Set based on actual observation data'}</li>
                            <li><strong>${t('wind_direction')}</strong>: ${currentLanguage === 'ko' ? '계절별 주요 바람 패턴 고려' : 'Consider seasonal wind patterns'}</li>
                            <li><strong>${t('latitude')}</strong>: ${currentLanguage === 'ko' ? '분석 대상 지역의 정확한 위도 사용' : 'Use accurate latitude of target region'}</li>
                            <li><strong>${t('depth')}</strong>: ${currentLanguage === 'ko' ? '관심 있는 수층 깊이 설정' : 'Set depth of interest'}</li>
                        </ul>
                    </div>
                    
                    <div class="solution-section">
                        <h4>📊 ${currentLanguage === 'ko' ? '시각화 활용 모범 사례' : 'Visualization Best Practices'}</h4>
                        <ul>
                            <li><strong>${t('vis_3d')}</strong>: ${currentLanguage === 'ko' ? '해류의 수직 구조 분석' : 'Vertical structure analysis of currents'}</li>
                            <li><strong>${t('vis_2d')}</strong>: ${currentLanguage === 'ko' ? '평면에서의 해류 패턴 분석' : '2D current pattern analysis'}</li>
                            <li><strong>${currentLanguage === 'ko' ? '결과 비교' : 'Result Comparison'}</strong>: ${currentLanguage === 'ko' ? '다양한 조건에서의 결과 비교' : 'Compare results under various conditions'}</li>
                        </ul>
                    </div>
                    
                    <div class="solution-section">
                        <h4>🔬 ${currentLanguage === 'ko' ? '과학적 분석 모범 사례' : 'Scientific Analysis Best Practices'}</h4>
                        <ul>
                            <li><strong>${currentLanguage === 'ko' ? '시스템적 접근' : 'Systematic Approach'}</strong>: ${currentLanguage === 'ko' ? '체계적인 파라미터 변화 실험' : 'Systematic parameter variation experiments'}</li>
                            <li><strong>${currentLanguage === 'ko' ? '문서화' : 'Documentation'}</strong>: ${currentLanguage === 'ko' ? '분석 조건과 결과를 상세히 기록' : 'Detailed recording of analysis conditions and results'}</li>
                            <li><strong>${currentLanguage === 'ko' ? '검증' : 'Verification'}</strong>: ${currentLanguage === 'ko' ? '다른 도구나 이론과의 비교 검증' : 'Comparison verification with other tools or theories'}</li>
                            <li><strong>${currentLanguage === 'ko' ? '해석' : 'Interpretation'}</strong>: ${currentLanguage === 'ko' ? '물리적 의미를 고려한 결과 해석' : 'Result interpretation considering physical meaning'}</li>
                        </ul>
                    </div>
                    
                    <div class="solution-tip">
                        <strong>💡 ${currentLanguage === 'ko' ? '팁:' : 'Tip:'}</strong> ${currentLanguage === 'ko' ? '분석 결과는 항상 물리적 배경과 함께 해석하세요.' : 'Always interpret analysis results with physical background.'}
                    </div>
                </div>
            `;
        }
        
        // 사례 연구
        function showCaseStudies() {
            const modalBody = document.getElementById('solutionModalBody');
            modalBody.innerHTML = `
                <div class="solution-section">
                    <h3>📊 ${t('solution_case_title')}</h3>
                    <p>${t('solution_case_desc')}</p>
                    
                    <div class="solution-section">
                        <h4>🌊 ${currentLanguage === 'ko' ? '쿠로시오 해류 분석' : 'Kuroshio Current Analysis'}</h4>
                        <ul>
                            <li><strong>${currentLanguage === 'ko' ? '지역' : 'Region'}</strong>: ${currentLanguage === 'ko' ? '북태평양 (위도: 30-35도)' : 'North Pacific (Latitude: 30-35°)'}</li>
                            <li><strong>${currentLanguage === 'ko' ? '바람 조건' : 'Wind Conditions'}</strong>: ${currentLanguage === 'ko' ? '서풍 15-20 m/s' : 'Westerlies 15-20 m/s'}</li>
                            <li><strong>${currentLanguage === 'ko' ? '분석 포인트' : 'Analysis Point'}</strong>: ${currentLanguage === 'ko' ? '강한 해류와 바람의 상호작용' : 'Interaction between strong currents and wind'}</li>
                            <li><strong>${currentLanguage === 'ko' ? '결과 해석' : 'Result Interpretation'}</strong>: ${currentLanguage === 'ko' ? '에크만 수송이 쿠로시오 해류에 미치는 영향' : 'Effect of Ekman transport on Kuroshio Current'}</li>
                        </ul>
                    </div>
                    
                    <div class="solution-section">
                        <h4>🌪️ ${currentLanguage === 'ko' ? '태풍 조건 시뮬레이션' : 'Typhoon Condition Simulation'}</h4>
                        <ul>
                            <li><strong>${currentLanguage === 'ko' ? '바람 조건' : 'Wind Conditions'}</strong>: ${currentLanguage === 'ko' ? '25-30 m/s 강풍' : '25-30 m/s strong wind'}</li>
                            <li><strong>${currentLanguage === 'ko' ? '분석 포인트' : 'Analysis Point'}</strong>: ${currentLanguage === 'ko' ? '극한 조건에서의 해류 변화' : 'Current changes under extreme conditions'}</li>
                            <li><strong>${currentLanguage === 'ko' ? '응용 분야' : 'Application Fields'}</strong>: ${currentLanguage === 'ko' ? '태풍 경로 예측, 해양 안전' : 'Typhoon path prediction, marine safety'}</li>
                        </ul>
                    </div>
                    
                    <div class="solution-section">
                        <h4>🧊 ${currentLanguage === 'ko' ? '극지 해류 분석' : 'Polar Current Analysis'}</h4>
                        <ul>
                            <li><strong>${currentLanguage === 'ko' ? '지역' : 'Region'}</strong>: ${currentLanguage === 'ko' ? '남극해 (위도: -60도)' : 'Southern Ocean (Latitude: -60°)'}</li>
                            <li><strong>${currentLanguage === 'ko' ? '특징' : 'Characteristics'}</strong>: ${currentLanguage === 'ko' ? '강한 코리올리 효과' : 'Strong Coriolis effect'}</li>
                            <li><strong>${currentLanguage === 'ko' ? '분석 포인트' : 'Analysis Point'}</strong>: ${currentLanguage === 'ko' ? '극지 순환과 에크만 수송' : 'Polar circulation and Ekman transport'}</li>
                        </ul>
                    </div>
                    
                    <div class="solution-section">
                        <h4>🔆 ${currentLanguage === 'ko' ? '적도 해류 분석' : 'Equatorial Current Analysis'}</h4>
                        <ul>
                            <li><strong>${currentLanguage === 'ko' ? '지역' : 'Region'}</strong>: ${currentLanguage === 'ko' ? '적도 근처 (위도: 0-5도)' : 'Near equator (Latitude: 0-5°)'}</li>
                            <li><strong>${currentLanguage === 'ko' ? '특징' : 'Characteristics'}</strong>: ${currentLanguage === 'ko' ? '코리올리 효과 최소화' : 'Minimized Coriolis effect'}</li>
                            <li><strong>${currentLanguage === 'ko' ? '분석 포인트' : 'Analysis Point'}</strong>: ${currentLanguage === 'ko' ? '적도 해류의 특수성' : 'Special characteristics of equatorial currents'}</li>
                        </ul>
                    </div>
                    
                    <div class="solution-tip">
                        <strong>💡 ${currentLanguage === 'ko' ? '팁:' : 'Tip:'}</strong> ${currentLanguage === 'ko' ? '각 사례 연구의 결과를 실제 관측 데이터와 비교해보세요.' : 'Compare the results of each case study with actual observation data.'}
                    </div>
                </div>
            `;
        }
        
        // 인라인 이벤트 리스너 추가 (onclick 대체)
        document.addEventListener('DOMContentLoaded', function() {
            // 모바일 메뉴 토글
            const menuToggle = document.querySelector('.mobile-menu-toggle');
            if (menuToggle) {
                menuToggle.addEventListener('click', toggleMobileMenu);
            }
            
            // 모바일 메뉴 닫기 (오버레이)
            const menuOverlay = document.querySelector('.mobile-menu-overlay');
            if (menuOverlay) {
                menuOverlay.addEventListener('click', closeMobileMenu);
                menuOverlay.addEventListener('touchend', closeMobileMenu);
            }
            
            // 사전 설정 버튼들 (data-preset 속성 사용)
            const presetButtons = document.querySelectorAll('.tk-button[data-preset]');
            presetButtons.forEach(btn => {
                const preset = btn.getAttribute('data-preset');
                btn.addEventListener('click', () => setPreset(preset));
            });
            
            // 계산 및 내보내기 버튼
            const calculateBtn = document.getElementById('calculate-btn');
            const exportBtn = document.getElementById('export-btn');
            if (calculateBtn) {
                calculateBtn.addEventListener('click', calculateAndVisualize);
            }
            if (exportBtn) {
                exportBtn.addEventListener('click', exportResults);
            }
            
            // 솔루션 모달 닫기 버튼
            const solutionModalClose = document.querySelector('.solution-modal-close');
            if (solutionModalClose) {
                solutionModalClose.addEventListener('click', closeSolutionModal);
            }
            
            // 푸터 및 기타 링크들에서 onclick 제거
            const linksWithOnclick = document.querySelectorAll('a[onclick]');
            linksWithOnclick.forEach(link => {
                const onclick = link.getAttribute('onclick');
                if (onclick) {
                    link.removeAttribute('onclick');
                    if (onclick.includes('return false')) {
                        link.addEventListener('click', function(e) {
                            e.preventDefault();
                            // 함수 호출만 실행
                            const funcCall = onclick.replace(/return false;?/g, '').trim();
                            if (funcCall) {
                                try {
                                    if (funcCall.includes('setPreset')) {
                                        const match = funcCall.match(/setPreset\('(\w+)'\)/);
                                        if (match) setPreset(match[1]);
                                    } else if (funcCall.includes('document.getElementById')) {
                                        eval(funcCall);
                                    } else if (funcCall.includes('exportResults')) {
                                        exportResults();
                                    } else if (funcCall.includes('openSolutionModal')) {
                                        openSolutionModal();
                                    } else if (funcCall.includes('showQuickStart')) {
                                        showQuickStart();
                                    } else if (funcCall.includes('showAdvancedUsage')) {
                                        showAdvancedUsage();
                                    } else if (funcCall.includes('showTroubleshooting')) {
                                        showTroubleshooting();
                                    } else if (funcCall.includes('showBestPractices')) {
                                        showBestPractices();
                                    } else if (funcCall.includes('showCaseStudies')) {
                                        showCaseStudies();
                                    } else if (funcCall.includes('alert')) {
                                        eval(funcCall);
                                    }
                                } catch (err) {
                                    console.error('Error executing:', funcCall, err);
                                }
                            }
                        });
                    }
                }
            });
            
            // 푸터 및 기타 링크들에서 data-action 처리
            document.querySelectorAll('a[data-action]').forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const action = link.getAttribute('data-action');
                    const preset = link.getAttribute('data-preset');
                    const vis = link.getAttribute('data-vis');
                    
                    switch(action) {
                        case 'preset':
                            if (preset) setPreset(preset);
                            break;
                        case 'vis':
                            if (vis) {
                                const radio = document.getElementById(`vis_${vis}`);
                                if (radio) radio.click();
                            }
                            break;
                        case 'export':
                            exportResults();
                            break;
                        case 'solution':
                            openSolutionModal();
                            break;
                        case 'quickstart':
                            showQuickStart();
                            break;
                        case 'advanced':
                            showAdvancedUsage();
                            break;
                        case 'troubleshooting':
                            showTroubleshooting();
                            break;
                        case 'bestpractices':
                            showBestPractices();
                            break;
                        case 'casestudies':
                            showCaseStudies();
                            break;
                    }
                });
            });
            
            // data-alert 속성 처리
            document.querySelectorAll('a[data-alert]').forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const message = link.getAttribute('data-alert');
                    if (message) alert(message);
                });
            });
        });