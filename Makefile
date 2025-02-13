source_files := web/

build/: $(source_files)
	webdev build --release

.PHONY: github_push
github_push: build/
	rm -rf docs/ && \
	mv build/ docs/ && \
	git add . && \
	git commit -m "Another build" && \
	git push
