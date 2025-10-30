# Автоматизация релизов и публикации

## Обзор процесса

Автоматизированный процесс релиза работает следующим образом:

1. **Pull Request в main** → запускаются тесты
2. **Merge в main** → автоматически:
   - Определяется тип версии из коммита (major/minor/patch)
   - Запускаются тесты
   - Собирается пакет
   - Публикуется в npm
   - Создается GitHub Release
   - Деплоится документация на GitHub Pages

## Conventional Commits

Тип версии определяется автоматически на основе формата коммита:

- `feat: новая функция` → **minor** версия (0.1.0 → 0.2.0)
- `fix: исправление бага` → **patch** версия (0.1.0 → 0.1.1)
- `feat!: breaking change` → **major** версия (0.1.0 → 1.0.0)
- `BREAKING CHANGE:` в теле коммита → **major** версия
- Другие коммиты → релиз не создается

### Примеры коммитов:

```bash
# Minor версия (новая функция)
git commit -m "feat: add drag and drop support"

# Patch версия (исправление)
git commit -m "fix: resolve tree rendering issue"

# Major версия (breaking change)
git commit -m "feat!: change API structure"

# Patch с областью
git commit -m "fix(tree): correct node selection"

# Не создает релиз
git commit -m "docs: update README"
git commit -m "chore: update dependencies"
```

## Настройка GitHub Actions

### 1. Файл `.github/workflows/release.yml` уже создан

Workflow автоматически:
- Собирает пакет
- Генерирует docgen
- Запускает тесты
- Определяет тип версии из коммита
- Обновляет версию в package.json
- Пересобирает пакет с новой версией
- Публикует пакет в npm
- Создает GitHub Release с тегом
- Деплоит документацию на GitHub Pages

### 2. Настройте GitHub Secrets

Добавьте в **Settings → Secrets and variables → Actions**:

#### NPM_TOKEN
1. Перейдите на https://www.npmjs.com/settings/YOUR_USERNAME/tokens
2. Нажмите "Generate New Token" → "Classic Token"
3. Выберите тип "Automation"
4. Скопируйте токен
5. В GitHub: Settings → Secrets → New repository secret
   - Name: `NPM_TOKEN`
   - Value: ваш токен из npm

### 3. Настройте GitHub Pages

В **Settings → Pages**:
- Source: **Deploy from a branch**
- Branch: **gh-pages** / **root**
- Сохраните

### 4. Настройте права для GitHub Actions

В **Settings → Actions → General → Workflow permissions**:
- ✅ Выберите "Read and write permissions"
- ✅ Включите "Allow GitHub Actions to create and approve pull requests"
- Сохраните

## Рабочий процесс (Workflow)

### Разработка новой функции

```bash
# 1. Создайте ветку
git checkout -b feature/new-feature

# 2. Внесите изменения
# ... код ...

# 3. Коммит с правильным форматом
git add .
git commit -m "feat: add new awesome feature"

# 4. Push и создайте PR
git push origin feature/new-feature
# Создайте Pull Request в GitHub

# 5. После ревью и одобрения - мердж в main
# GitHub Actions автоматически:
# ✅ Запустит тесты
# ✅ Увеличит minor версию (0.1.0 → 0.2.0)
# ✅ Опубликует в npm
# ✅ Создаст GitHub Release
# ✅ Задеплоит документацию
```

### Исправление бага

```bash
git checkout -b fix/bug-description
# ... исправления ...
git commit -m "fix: resolve issue with tree rendering"
# PR → Merge → автоматический patch релиз (0.1.0 → 0.1.1)
```

### Breaking change

```bash
git checkout -b feat/breaking-change
# ... изменения ...
git commit -m "feat!: change component API structure

BREAKING CHANGE: The Tree component now requires different props"
# PR → Merge → автоматический major релиз (0.1.0 → 1.0.0)
```

### Обновление документации (без релиза)

```bash
git checkout -b docs/update-readme
# ... изменения ...
git commit -m "docs: update installation instructions"
# PR → Merge → релиз НЕ создается, только обновляется main
```

## Мониторинг релизов

- **GitHub Actions**: https://github.com/sinups/fmap/actions
- **npm пакет**: https://www.npmjs.com/package/@sinups/fmap
- **GitHub Releases**: https://github.com/sinups/fmap/releases
- **Документация**: https://sinups.github.io/fmap/

## Проверка перед релизом

Перед мерджем в main убедитесь:

- ✅ Все тесты проходят локально: `npm test`
- ✅ Код собирается: `npm run build`
- ✅ Документация собирается: `npm run docs:build`
- ✅ Коммит следует Conventional Commits формату
- ✅ README обновлен (если нужно)

## Откат релиза

Если нужно откатить релиз:

```bash
# 1. Откатите коммит в main
git revert HEAD
git push

# 2. Удалите тег
git tag -d VERSION
git push origin :refs/tags/VERSION

# 3. Удалите релиз в GitHub UI (Settings → Releases)

# 4. Deprecate версию в npm (нельзя удалить)
npm deprecate @sinups/fmap@VERSION "This version has been deprecated"
```

## Ручной релиз (если нужно)

Если автоматизация не работает, можно запустить вручную:

```bash
# Patch версия
npm run release:patch

# Minor версия
npm run release:minor

# Major версия
npm run release:major
```

## Troubleshooting

### Релиз не создается

**Проблема**: После мерджа в main релиз не создается

**Решение**:
- Проверьте формат коммита (должен быть `feat:`, `fix:`, etc.)
- Проверьте логи в GitHub Actions → вкладка Actions
- Убедитесь, что коммит не начинается с `docs:`, `chore:`, `style:`, `test:`

### Публикация в npm не работает

**Проблема**: Пакет не публикуется в npm

**Решение**:
- Проверьте NPM_TOKEN в GitHub Secrets
- Убедитесь, что токен имеет права на публикацию (тип "Automation")
- Проверьте, что пакет не существует с такой версией
- Проверьте логи в GitHub Actions

### Документация не деплоится

**Проблема**: Документация не обновляется на GitHub Pages

**Решение**:
- Проверьте настройки GitHub Pages (Settings → Pages)
- Убедитесь, что ветка `gh-pages` создана
- Проверьте права GitHub Actions (Read and write)
- Проверьте логи деплоя в Actions

### Ошибка прав доступа

**Проблема**: `Permission denied` при push или создании релиза

**Решение**:
- Settings → Actions → General → Workflow permissions
- Выберите "Read and write permissions"
- Включите "Allow GitHub Actions to create and approve pull requests"

## Дополнительные возможности

### Pre-release версии

Для создания pre-release версий (beta, alpha) используйте ручной релиз:

```bash
npm run release:minor -- --stage beta
# Создаст версию типа 0.2.0-beta.0
```

### Автоматический CHANGELOG

Можно добавить генерацию CHANGELOG на основе коммитов:

```bash
yarn add -D conventional-changelog-cli
```

Добавьте в `.github/workflows/release.yml` перед публикацией:

```yaml
- name: Generate CHANGELOG
  run: npx conventional-changelog -p angular -i CHANGELOG.md -s
  
- name: Commit CHANGELOG
  run: |
    git add CHANGELOG.md
    git commit -m "docs: update CHANGELOG"
```

## Быстрый старт

1. ✅ Создан файл `.github/workflows/release.yml`
2. ⚠️ Добавьте NPM_TOKEN в GitHub Secrets
3. ⚠️ Настройте GitHub Pages
4. ⚠️ Настройте права для GitHub Actions
5. ✅ Используйте Conventional Commits для коммитов
6. ✅ Мердж в main → автоматический релиз

## Примеры использования

### Пример 1: Добавление новой функции

```bash
git checkout -b feat/add-search
# Добавляем функцию поиска
git commit -m "feat: add search functionality to tree component"
git push origin feat/add-search
# Создаем PR → Review → Merge
# Результат: версия 0.1.0 → 0.2.0
```

### Пример 2: Исправление бага

```bash
git checkout -b fix/selection-bug
# Исправляем баг
git commit -m "fix(tree): resolve selection issue on mobile devices"
git push origin fix/selection-bug
# PR → Merge
# Результат: версия 0.2.0 → 0.2.1
```

### Пример 3: Breaking change

```bash
git checkout -b feat/new-api
# Меняем API
git commit -m "feat!: redesign component API for better flexibility

BREAKING CHANGE: Props structure has changed. See migration guide."
git push origin feat/new-api
# PR → Merge
# Результат: версия 0.2.1 → 1.0.0
```
